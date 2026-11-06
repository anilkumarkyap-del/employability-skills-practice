(function () {
  var main = document.getElementById("main"), esc = ASM.esc, KEYN = "es_tk";
  var key = ""; try { key = sessionStorage.getItem(KEYN) || ""; } catch (e) {}
  var roster = [];
  function strip(t) { return String(t || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
  function call(o) { o.key = key; return ESApi.post(o); }

  if (!ESApi.ready()) { main.innerHTML = "<div class='as-msg'><b>Not set up yet.</b><br>Open <code>config.js</code> and paste your Web app URL (see SETUP-ASSIGNMENTS.txt), then upload it to GitHub.</div>"; return; }

  function login(err) {
    main.innerHTML = "<div class='qcard as-form'><h2>Teacher key</h2><p class='hint'>Enter the secret key you wrote in Code.gs (TEACHER_KEY).</p><input id='k' type='password' placeholder='Teacher key' autocomplete='off'><button id='kb' class='btn primary' type='button'>Continue</button><p class='badc' id='ke'>" + (err || "") + "</p></div>";
    document.getElementById("kb").onclick = function () {
      key = document.getElementById("k").value; var b = this; b.disabled = true; b.textContent = "Checking…";
      call({ action: "check" }).then(function (r) {
        if (r.ok) { try { sessionStorage.setItem(KEYN, key); } catch (e) {} home(); } else { key = ""; login(r.error); }
      }).catch(function () { login("Could not reach the server."); });
    };
  }

  var tab = "create";
  function home() {
    main.innerHTML = "<div class='as-tabs'><button data-t='create'>Create</button><button data-t='manage'>Assignments &amp; Results</button><button data-t='roster'>Student list</button></div><div id='pane'></div>";
    main.querySelector(".as-tabs").onclick = function (e) { var b = e.target.closest("button"); if (b) show(b.dataset.t); };
    show(tab);
  }
  function show(t) {
    tab = t;
    [].forEach.call(main.querySelectorAll(".as-tabs button"), function (b) { b.className = b.dataset.t === t ? "on" : ""; });
    if (t === "create") createPane(); else if (t === "manage") managePane(); else rosterPane();
  }
  var pane = function () { return document.getElementById("pane"); };

  /* ---------- CREATE ---------- */
  var PL = [], picked = [], bank = null;
  function createPane() {
    var p = pane();
    if (!bank) {
      p.innerHTML = "<p class='lead'>Loading question bank…</p>";
      var list = ASM.papers();
      Promise.all(list.map(function (m) { return ASM.loadPaper(m.id).then(function (P) { return { m: m, P: P }; }, function () { return null; }); })).then(function (r) { bank = r.filter(Boolean); createPane(); });
      return;
    }
    var h = "<div class='qcard as-form'><h2>1. Details</h2><label>Title</label><input id='ti' type='text' placeholder='e.g. Assignment 1 – Percentages'>" +
      "<label>Due date &amp; time <small>(optional)</small></label><input id='du' type='datetime-local'>" +
      "<label class='chk'><input id='ss' type='checkbox' checked> Show answers &amp; solutions to students after they submit</label></div>";
    h += "<div class='qcard as-form'><h2>2. Choose modules / topics</h2><p class='hint'>Tick whole papers or only some topics. Questions are picked from what you tick.</p><div id='bank'>";
    var grp = null;
    bank.forEach(function (b, bi) {
      var g = b.m.group || "Model papers";
      if (g !== grp) { h += "<h3 class='grp2'>" + esc(g) + "</h3>"; grp = g; }
      var n = b.P.questions.length, secs = b.P.sections || [];
      h += "<details class='bk'><summary><label><input type='checkbox' class='pk' data-b='" + bi + "'> " + esc(b.m.title) + " <small>(" + n + " Qs)</small></label></summary>";
      if (secs.length > 1) secs.forEach(function (s, si) { h += "<label class='chk sub'><input type='checkbox' class='sk' data-b='" + bi + "' data-s='" + si + "'> " + esc(s.name) + " <small>(" + (s.to - s.from + 1) + ")</small></label>"; });
      h += "</details>";
    });
    h += "</div><p id='pool' class='hint'>0 questions available</p></div>";
    h += "<div class='qcard as-form'><h2>3. How many questions?</h2><input id='nq' type='number' min='1' value='10' style='max-width:120px'> <button id='pick' class='btn' type='button'>Pick random questions</button><div id='prev'></div></div>";
    h += "<div class='qcard as-form'><button id='pub' class='btn primary' type='button'>Publish assignment</button><p id='pm'></p></div>";
    p.innerHTML = h;
    var bk = document.getElementById("bank");
    bk.addEventListener("change", function (e) {
      var t = e.target, bi = +t.dataset.b;
      if (t.classList.contains("pk")) [].forEach.call(bk.querySelectorAll(".sk[data-b='" + bi + "']"), function (c) { c.checked = t.checked; });
      else if (t.classList.contains("sk")) { var all = bk.querySelectorAll(".sk[data-b='" + bi + "']"), on = bk.querySelectorAll(".sk[data-b='" + bi + "']:checked"); var pk = bk.querySelector(".pk[data-b='" + bi + "']"); pk.checked = on.length === all.length; pk.indeterminate = on.length > 0 && on.length < all.length; }
      calcPool();
    });
    document.getElementById("pick").onclick = function () { doPick(); };
    document.getElementById("pub").onclick = publish;
    renderPicked();
  }
  function calcPool() {
    PL = [];
    bank.forEach(function (b, bi) {
      var secs = b.P.sections || [], n = b.P.questions.length;
      var pk = main.querySelector(".pk[data-b='" + bi + "']"), sk = main.querySelectorAll(".sk[data-b='" + bi + "']");
      if (secs.length > 1) {
        [].forEach.call(sk, function (c) { if (c.checked) { var s = secs[+c.dataset.s]; for (var q = s.from; q <= s.to; q++) PL.push([b.m.id, q - 1]); } });
      } else if (pk.checked) for (var q = 0; q < n; q++) PL.push([b.m.id, q]);
    });
    document.getElementById("pool").textContent = PL.length + " questions available in your selection";
  }
  function topicsText() {
    var t = [];
    bank.forEach(function (b, bi) { var pk = main.querySelector(".pk[data-b='" + bi + "']"); if (pk && (pk.checked || pk.indeterminate)) t.push(b.m.title); });
    return t.slice(0, 4).join("; ") + (t.length > 4 ? " +" + (t.length - 4) + " more" : "");
  }
  function doPick() {
    calcPool(); var n = Math.floor(+document.getElementById("nq").value);
    if (!PL.length) { alert("Tick at least one module / topic first."); return; }
    if (!(n > 0)) { alert("Enter how many questions."); return; }
    if (n > PL.length) { alert("Only " + PL.length + " questions in your selection, so I will use all of them."); n = PL.length; document.getElementById("nq").value = n; }
    var a = PL.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    picked = a.slice(0, n);
    renderPicked();
  }
  function lookup(id) { for (var i = 0; i < bank.length; i++) if (bank[i].m.id === id) return bank[i]; }
  function renderPicked() {
    var el = document.getElementById("prev"); if (!el) return;
    if (!picked.length) { el.innerHTML = ""; return; }
    var h = "<p class='hint'><b>" + picked.length + " questions picked</b> (" + picked.length + " marks). Remove any you don't want, or pick again.</p><ol class='as-pl'>";
    picked.forEach(function (r, i) {
      var b = lookup(r[0]), q = b.P.questions[r[1]];
      h += "<li><span>" + esc(strip(q.q).slice(0, 110)) + "<br><small>" + esc(b.m.title) + "</small></span><button type='button' class='x' data-i='" + i + "' title='Remove'>✕</button></li>";
    });
    el.innerHTML = h + "</ol>";
    el.onclick = function (e) { var x = e.target.closest(".x"); if (x) { picked.splice(+x.dataset.i, 1); renderPicked(); } };
  }
  function publish() {
    var ti = document.getElementById("ti").value.trim(), pm = document.getElementById("pm");
    if (!ti) { pm.textContent = "Please enter a title."; pm.className = "badc"; return; }
    if (!picked.length) { pm.textContent = "Pick the questions first (step 3)."; pm.className = "badc"; return; }
    var du = document.getElementById("du").value, b = document.getElementById("pub");
    b.disabled = true; pm.textContent = "Publishing…"; pm.className = "hint";
    call({ action: "create", assignment: { title: ti, refs: picked, due: du ? new Date(du).toISOString() : "", showSol: document.getElementById("ss").checked, topics: topicsText() } }).then(function (r) {
      if (r.ok) { picked = []; tab = "manage"; home(); } else { pm.textContent = r.error || "Failed"; pm.className = "badc"; b.disabled = false; }
    }).catch(function () { pm.textContent = "Could not reach the server."; pm.className = "badc"; b.disabled = false; });
  }

  /* ---------- MANAGE ---------- */
  function managePane() {
    var p = pane(); p.innerHTML = "<p class='lead'>Loading…</p>";
    Promise.all([call({ action: "adminlist" }), call({ action: "getroster" })]).then(function (rs) {
      if (!rs[0].ok) throw 0; roster = rs[1].roster || [];
      var l = rs[0].assignments;
      if (!l.length) { p.innerHTML = "<div class='as-msg'>No assignments yet. Use the Create tab.</div>"; return; }
      var h = "";
      l.forEach(function (a) {
        h += "<div class='qcard as-item'><h3>" + esc(a.title) + "</h3><p class='hint'>" + a.n + " questions · " + (a.active ? "<b class='okc'>Open</b>" : "<b class='badc'>Closed</b>") + " · " + a.submissions + (roster.length ? " of " + roster.length : "") + " submitted" + (a.due ? "<br>Due: " + ASM.fmtDate(a.due) : "") + "</p>" +
          "<div class='as-btns'><button class='btn primary' data-a='res' data-id='" + a.id + "'>Results</button><button class='btn' data-a='tog' data-id='" + a.id + "' data-v='" + (a.active ? 0 : 1) + "'>" + (a.active ? "Close" : "Re-open") + "</button><button class='btn' data-a='del' data-id='" + a.id + "'>Delete</button></div></div>";
      });
      p.innerHTML = h;
      p.onclick = function (e) {
        var b = e.target.closest("button[data-a]"); if (!b) return; var id = b.dataset.id;
        if (b.dataset.a === "res") resultsPane(id);
        else if (b.dataset.a === "tog") call({ action: "setactive", id: id, active: b.dataset.v === "1" }).then(managePane);
        else if (b.dataset.a === "del") { if (confirm("Delete this assignment AND all its results? This cannot be undone.")) call({ action: "remove", id: id }).then(managePane); }
      };
    }).catch(function () { p.innerHTML = "<div class='as-msg'>Could not load. Check internet / teacher key.</div>"; });
  }

  /* ---------- RESULTS ---------- */
  function resultsPane(id) {
    var p = pane(); p.innerHTML = "<p class='lead'>Loading results…</p>";
    call({ action: "results", id: id }).then(function (r) {
      if (!r.ok) throw 0;
      var A = r.assignment, rows = r.rows.slice().sort(function (a, b) { return a.reg < b.reg ? -1 : 1; });
      var names = {}; roster.forEach(function (x) { names[x[0].toUpperCase()] = x[1]; });
      var done = {}; rows.forEach(function (x) { done[x.reg.toUpperCase()] = 1; if (!x.name && names[x.reg.toUpperCase()]) x.name = names[x.reg.toUpperCase()]; });
      var absent = roster.filter(function (x) { return !done[x[0].toUpperCase()]; });
      var tot = rows.reduce(function (s, x) { return s + x.score; }, 0), n = A.n;
      var avg = rows.length ? (tot / rows.length) : 0, hi = rows.length ? Math.max.apply(0, rows.map(function (x) { return x.score; })) : 0, lo = rows.length ? Math.min.apply(0, rows.map(function (x) { return x.score; })) : 0;
      var h = "<button class='btn' id='bk' type='button'>&larr; Back</button><div class='qcard'><h2>" + esc(A.title) + "</h2><p class='hint'>" + n + " questions · " + n + " marks" + (A.due ? " · Due " + ASM.fmtDate(A.due) : "") + "</p>" +
        "<div class='as-stats'><div><b>" + rows.length + "</b>submitted</div><div><b>" + (roster.length ? absent.length : "–") + "</b>not submitted</div><div><b>" + avg.toFixed(1) + "</b>average</div><div><b>" + hi + "</b>highest</div><div><b>" + lo + "</b>lowest</div></div>" +
        "<div class='as-btns'><button class='btn primary' id='dx'>Download Excel</button><button class='btn primary' id='dp'>Download PDF</button><button class='btn' id='dc'>CSV</button></div></div>";
      var all = [];
      rows.forEach(function (x) { all.push([x.reg, x.name || "", x.score, n, Math.round(x.score * 100 / n), x.minutes, x.submitted, "Submitted"]); });
      absent.forEach(function (x) { all.push([x[0].toUpperCase(), x[1], 0, n, 0, "", "", "Not submitted"]); });
      all.sort(function (a, b) { return a[0] < b[0] ? -1 : 1; });
      h += "<div class='qcard'><div class='tw'><table><thead><tr><th>#</th><th>Register No</th><th>Name</th><th>Marks</th></tr></thead><tbody>";
      all.forEach(function (x, i) { h += "<tr" + (x[7] === "Submitted" ? "" : " class='abs'") + "><td>" + (i + 1) + "</td><td>" + esc(x[0]) + "</td><td>" + esc(x[1]) + "</td><td>" + (x[7] === "Submitted" ? x[2] + " / " + n : "Not submitted") + "</td></tr>"; });
      h += "</tbody></table></div>" + (roster.length ? "" : "<p class='hint'>Tip: add your students in the “Student list” tab to also see who has not attempted.</p>") + "</div>";
      p.innerHTML = h;
      document.getElementById("bk").onclick = managePane;
      var head = ["Sl No", "Register No", "Name", "Marks", "Out of", "Percent", "Time (min)", "Submitted at", "Status"];
      var data = all.map(function (x, i) { return [i + 1, x[0], x[1], x[7] === "Submitted" ? x[2] : "", x[3], x[7] === "Submitted" ? x[4] : "", x[5], x[6] ? ASM.fmtDate(x[6]) : "", x[7]]; });
      var fname = (A.title || "assignment").replace(/[^A-Za-z0-9]+/g, "_").slice(0, 40);
      document.getElementById("dx").onclick = function () { ESExport.save(ESExport.xlsx("Results", [head].concat(data)), fname + "_results.xlsx"); };
      document.getElementById("dc").onclick = function () { ESExport.save(ESExport.csv([head].concat(data)), fname + "_results.csv"); };
      document.getElementById("dp").onclick = function () {
        ESExport.save(ESExport.pdf({ title: A.title + " - Results", lines: ["Total marks: " + n + " (1 mark per question)   Submitted: " + rows.length + (roster.length ? "   Not submitted: " + absent.length : "") + "   Average: " + avg.toFixed(1), "Generated: " + ASM.fmtDate(new Date().toISOString())],
          head: ["Sl", "Register No", "Name", "Marks", "Out of", "%", "Status"], widths: [.5, 2, 3.5, .9, .9, .8, 1.6],
          rows: data.map(function (d) { return [d[0], d[1], d[2], d[3], d[4], d[5], d[8]]; }) }), fname + "_results.pdf");
      };
    }).catch(function () { p.innerHTML = "<div class='as-msg'>Could not load results.</div>"; });
  }

  /* ---------- ROSTER ---------- */
  function rosterPane() {
    var p = pane(); p.innerHTML = "<p class='lead'>Loading…</p>";
    call({ action: "getroster" }).then(function (r) {
      roster = r.roster || [];
      p.innerHTML = "<div class='qcard as-form'><h2>Student list</h2><p class='hint'>Paste one student per line: <b>REGISTER NO, Name</b>. Used only to show who has NOT attempted and to fill names in results. Saved in your Google Sheet (not on the website).</p><textarea id='rs' rows='12' placeholder='U05RN24C0001, Student Name'>" + esc(roster.map(function (x) { return x[0] + ", " + x[1]; }).join("\n")) + "</textarea><button id='sr' class='btn primary' type='button'>Save list</button><p id='rm'></p></div>";
      document.getElementById("sr").onclick = function () {
        var list = document.getElementById("rs").value.split(/\n+/).map(function (l) { var m = l.split(/[,\t]/); return [(m.shift() || "").trim().toUpperCase(), m.join(",").trim()]; }).filter(function (x) { return x[0]; });
        call({ action: "saveroster", roster: list }).then(function (r) { var m = document.getElementById("rm"); m.textContent = r.ok ? "Saved " + r.count + " students." : (r.error || "Failed"); m.className = r.ok ? "okc" : "badc"; roster = list; });
      };
    });
  }

  if (key) call({ action: "check" }).then(function (r) { r.ok ? home() : login(); }).catch(function () { login("Could not reach the server."); }); else login();
})();
