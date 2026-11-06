(function () {
  var main = document.getElementById("main"), S = ESApi.session(), esc = ASM.esc, LET = ASM.LET;
  var aid = (new URLSearchParams(location.search).get("a") || "").replace(/[^A-Za-z0-9]/g, "");
  var KEY = "asg:" + S.u + ":" + aid;
  function msg(t) { main.innerHTML = "<div class='as-msg'>" + t + "</div>"; }
  if (!aid) return msg("No assignment selected. <a href='assignments.html'>Go back</a>.");
  if (S.r === "admin") return msg("Teachers cannot attempt. <a href='assign-admin.html'>Assignment Manager</a>");
  if (!ESApi.ready()) return msg("Assignments are not switched on yet.");
  var A, Q = [], st = { ans: {}, cur: 0, t0: Date.now() };

  msg("Loading assignment…");
  ESApi.post({ action: "list", reg: S.u }).then(function (r) {
    if (!r.ok) throw new Error(r.error);
    A = r.assignments.filter(function (x) { return x.id === aid; })[0];
    if (!A) return msg("This assignment is not available any more. <a href='assignments.html'>Go back</a>.");
    document.getElementById("ptitle").textContent = A.title;
    document.title = A.title;
    var ids = []; A.refs.forEach(function (x) { if (ids.indexOf(x[0]) < 0) ids.push(x[0]); });
    return Promise.all(ids.map(ASM.loadPaper)).then(function (ps) {
      var P = {}; ids.forEach(function (id, i) { P[id] = ps[i]; });
      A.refs.forEach(function (x) { var q = P[x[0]].questions[x[1]]; if (q) Q.push({ q: q, P: P[x[0]], i: x[1] }); });
      if (!Q.length) return msg("Questions could not be loaded.");
      if (A.done) return reviewMode(A.done);
      try { var sv = JSON.parse(localStorage.getItem(KEY) || "null"); if (sv) st = sv; } catch (e) {}
      if (st.cur >= Q.length) st.cur = 0;
      render();
    });
  }).catch(function () { msg("Could not load. Check your internet and <a href='attempt.html?a=" + aid + "'>try again</a>."); });

  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function palette() {
    var g = "", n = 0;
    for (var i = 0; i < Q.length; i++) {
      var c = "pn"; if (st.ans[i] !== undefined) { c += " ans"; n++; } if (i === st.cur) c += " cur";
      g += "<button type='button' class='" + c + "' data-i='" + i + "'>" + (i + 1) + "</button>";
    }
    document.getElementById("palgrid").innerHTML = g;
    document.getElementById("score").textContent = n + " / " + Q.length + " answered";
  }
  function render() {
    var i = st.cur, o = Q[i], a = st.ans[i];
    var h = "<div class='sec'>" + esc(ASM.sectionName(o.P, o.i + 1) || o.P.title || "") + "</div><div class='qcard'><div class='qhead'><span class='qno'>Q" + (i + 1) + "</span><span class='of'>of " + Q.length + " · 1 mark</span></div>";
    h += ASM.qBody(o.q) + "<div class='opts'>";
    o.q.opts.forEach(function (t, k) { h += "<button type='button' class='opt" + (a === k ? " sel" : "") + "' data-k='" + k + "'><b>" + LET[k] + "</b><span>" + esc(t) + "</span></button>"; });
    h += "</div><p class='hint'>You can change your answer until you submit.</p></div>";
    h += "<div class='nav'><button type='button' id='prev' class='btn'" + (i === 0 ? " disabled" : "") + ">&larr; Previous</button>";
    h += i === Q.length - 1 ? "<button type='button' id='fin' class='btn primary'>Review &amp; Submit</button>" : "<button type='button' id='next' class='btn primary'>Next &rarr;</button>";
    main.innerHTML = h + "</div>";
    palette(); save();
  }
  function go(i) { st.cur = Math.max(0, Math.min(Q.length - 1, i)); render(); window.scrollTo(0, 0); document.getElementById("pal").classList.remove("open"); }
  function confirmScreen() {
    var un = []; for (var i = 0; i < Q.length; i++) if (st.ans[i] === undefined) un.push(i + 1);
    main.innerHTML = "<div class='qcard center'><h2>Submit assignment?</h2><p>You answered <b>" + (Q.length - un.length) + "</b> of <b>" + Q.length + "</b> questions.</p>" +
      (un.length ? "<p class='badc'>Not answered: Q" + un.join(", Q") + "</p>" : "") +
      "<p class='hint'>After submitting you cannot change or retake it.</p><div class='nav'><button type='button' id='back' class='btn'>&larr; Back</button><button type='button' id='sub' class='btn primary'>Submit</button></div><p id='err' class='badc'></p></div>";
    document.getElementById("back").onclick = render;
    document.getElementById("sub").onclick = submit;
    window.scrollTo(0, 0);
  }
  function submit() {
    var b = document.getElementById("sub"); b.disabled = true; b.textContent = "Submitting…";
    var score = 0, ans = [];
    Q.forEach(function (o, i) { var a = st.ans[i]; ans.push(a === undefined ? -1 : a); if (a === o.q.a) score++; });
    ESApi.post({ action: "submit", aid: aid, reg: S.u, name: S.n || "", score: score, answers: ans, minutes: Math.round((Date.now() - (st.t0 || Date.now())) / 60000) }).then(function (r) {
      if (r.ok) { try { localStorage.removeItem(KEY); localStorage.setItem(KEY + ":ans", JSON.stringify(ans)); } catch (e) {} return reviewMode({ score: r.score, total: r.total }, ans); }
      if (r.error === "already") return reviewMode({ score: r.score, total: r.total });
      document.getElementById("err").textContent = r.error || "Could not submit."; b.disabled = false; b.textContent = "Submit";
    }).catch(function () { document.getElementById("err").textContent = "No internet. Your answers are saved — tap Submit again when online."; b.disabled = false; b.textContent = "Submit"; });
  }
  function reviewMode(done, ans) {
    document.getElementById("pal").style.display = "none"; document.getElementById("palbtn").style.display = "none";
    if (!ans) { try { ans = JSON.parse(localStorage.getItem(KEY + ":ans") || "null"); } catch (e) {} }
    var h = "<div class='qcard center'><h2>" + esc(A.title) + "</h2><div class='big'>" + done.score + " / " + done.total + "</div><p>Your score (1 mark per question)</p>";
    h += A.showSol && ans ? "<p class='hint'>Your answers and solutions are below.</p>" : "<p class='hint'>Your teacher has not enabled solutions for this assignment.</p>";
    h += "<div class='nav'><a class='btn' href='assignments.html'>&larr; All assignments</a></div></div>";
    if (A.showSol && ans) Q.forEach(function (o, i) {
      var a = ans[i], ok = a === o.q.a;
      h += "<div class='qcard'><div class='qhead'><span class='qno'>Q" + (i + 1) + "</span><span class='of'>" + (ok ? "✔ 1 mark" : "✘ 0 marks") + "</span></div>" + ASM.qBody(o.q) + "<div class='opts'>";
      o.q.opts.forEach(function (t, k) { var c = "opt"; if (k === o.q.a) c += " right"; else if (k === a) c += " wrong"; else c += " dim"; h += "<button type='button' class='" + c + "' disabled><b>" + LET[k] + "</b><span>" + esc(t) + "</span></button>"; });
      h += "</div><div class='res " + (ok ? "ok" : "bad") + "'>" + (a < 0 || a === undefined ? "Not answered." : ok ? "Correct!" : "Your answer: (" + LET[a] + ").") + " Answer: (" + LET[o.q.a] + ") " + esc(o.q.opts[o.q.a]) + "</div>" + ASM.qSol(o.q, o.P, o.i) + "</div>";
    });
    main.className = "wrap q as"; main.innerHTML = h; window.scrollTo(0, 0);
  }

  main.addEventListener("click", function (e) {
    var t = e.target.closest("button,a"); if (!t) return;
    if (t.classList.contains("opt") && t.dataset.k !== undefined && !t.disabled) { st.ans[st.cur] = +t.dataset.k; render(); return; }
    if (t.id === "prev") go(st.cur - 1); else if (t.id === "next") go(st.cur + 1); else if (t.id === "fin") confirmScreen();
  });
  document.getElementById("palgrid").addEventListener("click", function (e) { var b = e.target.closest(".pn"); if (b && Q.length) go(+b.dataset.i); });
  document.getElementById("palbtn").onclick = function () { document.getElementById("pal").classList.toggle("open"); };
})();
