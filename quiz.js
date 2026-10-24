(function () {
  var params = new URLSearchParams(location.search);
  var id = (params.get("p") || "").replace(/[^a-z0-9_-]/gi, "");
  var main = document.getElementById("main");
  var LET = ["A", "B", "C", "D"];

  if (!id) { main.innerHTML = "<p>No paper selected. <a href='index.html'>Go back</a>.</p>"; return; }

  var s = document.createElement("script");
  s.src = id + ".js";
  s.onload = start;
  s.onerror = function () { main.innerHTML = "<p>Paper not found. <a href='index.html'>Go back</a>.</p>"; };
  document.head.appendChild(s);

  function start() {
    var P = window.PAPERS[id], Q = P.questions, N = Q.length;
    var KEY = "practice:" + id;
    var st = { ans: {}, cur: 0 };
    try { var sv = JSON.parse(localStorage.getItem(KEY) || "null"); if (sv) st = sv; } catch (e) {}
    if (st.cur >= N) st.cur = 0;
    document.title = P.title;
    document.getElementById("ptitle").textContent = P.title;

    function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
    function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
    function secIndex(n) {
      for (var i = 0; i < (P.sections || []).length; i++) if (n >= P.sections[i].from && n <= P.sections[i].to) return i;
      return 0;
    }
    function flowHtml(f) {
      return "<div class='flow'>" + f.map(function (x) {
        if (typeof x === "string") return "<span class='fo'>" + x + "</span>";
        var lab = x[0], val = x[1], g = x[2] === "g" ? " g" : "";
        if (!val) return "<div class='fb" + g + "'><b>" + lab + "</b></div>";
        return "<div class='fb" + g + "'><small>" + lab + "</small><b>" + val + "</b></div>";
      }).join("") + "</div>";
    }
    function sectionOf(n) {
      for (var i = 0; i < (P.sections || []).length; i++) if (n >= P.sections[i].from && n <= P.sections[i].to) return P.sections[i].name;
      return "";
    }
    function tbl(t) {
      var h = "<div class='tw'><table><thead><tr>" + t.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>";
      t.rows.forEach(function (r) { h += "<tr>" + r.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; });
      return h + "</tbody></table></div>";
    }

    function renderPalette() {
      var g = document.getElementById("palgrid"), h = "", right = 0, done = 0;
      for (var i = 0; i < N; i++) {
        var a = st.ans[i], c = "pn";
        if (a !== undefined) { done++; if (a === Q[i].a) { c += " ok"; right++; } else c += " bad"; }
        if (i === st.cur) c += " cur";
        h += "<button type='button' class='" + c + "' data-i='" + i + "'>" + (i + 1) + "</button>";
      }
      g.innerHTML = h;
      document.getElementById("score").textContent = right + " / " + done + " correct";
    }

    function render() {
      var i = st.cur, q = Q[i], a = st.ans[i], answered = a !== undefined;
      main.className = "wrap q s" + (secIndex(i + 1) % 5);
      var h = "<div class='sec'>" + esc(sectionOf(i + 1)) + "</div>";
      h += "<div class='qcard'><div class='qhead'><span class='qno'>Q" + (i + 1) + "</span><span class='of'>of " + N + "</span></div>";
      if (q.note0) h += "<p class='dir'>" + q.note0 + "</p>";
      h += "<p class='qtext'>" + q.q + "</p>";
      if (q.data) h += tbl(q.data);
      if (q.img) h += "<img class='fig' src='" + q.img + "' alt='Figure for question " + (i + 1) + "'>";
      h += "<div class='opts'>";
      q.opts.forEach(function (o, k) {
        var c = "opt";
        if (answered) { if (k === q.a) c += " right"; else if (k === a) c += " wrong"; else c += " dim"; }
        h += "<button type='button' class='" + c + "' data-k='" + k + "'" + (answered ? " disabled" : "") + "><b>" + LET[k] + "</b><span>" + esc(o) + "</span></button>";
      });
      h += "</div>";

      if (answered) {
        h += "<div class='res " + (a === q.a ? "ok" : "bad") + "'>" + (a === q.a ? "✔ Correct!" : "✘ Not correct.") + " &nbsp;Answer: (" + LET[q.a] + ") " + esc(q.opts[q.a]) + "</div>";
        h += "<div class='sol'>";
        h += "<div class='box key'><span class='lab'>KEY IDEA</span><div>" + q.key + "</div></div>";
        if (P.diagrams && P.diagrams[i + 1] && window.DG) h += window.DG.render(P.diagrams[i + 1]);
        if (P.flows && P.flows[i + 1]) h += flowHtml(P.flows[i + 1]);
        h += "<ol class='steps'>" + q.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>";
        if (q.table) h += tbl(q.table);
        if (q.tip) h += "<div class='box tip'><span class='lab'>TIP</span><div>" + q.tip + "</div></div>";
        if (q.watch) h += "<div class='box watch'><span class='lab'>WATCH OUT</span><div>" + q.watch + "</div></div>";
        if (q.note) h += "<div class='box note'><span class='lab'>NOTE</span><div>" + q.note + "</div></div>";
        if (q.check) h += "<div class='box check'><span class='lab'>CHECK THIS</span><div>" + q.check + "</div></div>";
        h += "</div>";
      }
      h += "</div>";

      h += "<div class='nav'><button type='button' id='prev' class='btn'" + (i === 0 ? " disabled" : "") + ">&larr; Previous</button>";
      h += (i === N - 1)
        ? "<button type='button' id='fin' class='btn primary'>Finish</button>"
        : "<button type='button' id='next' class='btn primary'>Next &rarr;</button>";
      h += "</div>";
      main.innerHTML = h;
      renderPalette();
      save();
    }

    function results() {
      var right = 0, wrong = 0, skip = 0;
      for (var i = 0; i < N; i++) { var a = st.ans[i]; if (a === undefined) skip++; else if (a === Q[i].a) right++; else wrong++; }
      var pct = Math.round(right * 100 / N);
      var h = "<div class='qcard center'><h2>Result</h2><div class='big'>" + right + " / " + N + "</div><p>" + pct + "% correct</p>";
      h += "<p class='sum'><span class='okc'>Correct: " + right + "</span> · <span class='badc'>Wrong: " + wrong + "</span> · Skipped: " + skip + "</p>";
      h += "<p class='hint'>Tap any question number on the list to review its solution.</p>";
      h += "<div class='nav'><button type='button' id='back' class='btn'>&larr; Back to questions</button></div></div>";
      main.innerHTML = h;
      document.getElementById("back").onclick = render;
      window.scrollTo(0, 0);
    }

    function go(i) { st.cur = Math.max(0, Math.min(N - 1, i)); render(); window.scrollTo(0, 0); closePal(); }
    function closePal() { document.getElementById("pal").classList.remove("open"); }

    main.addEventListener("click", function (e) {
      var o = e.target.closest(".opt");
      if (o && !o.disabled) { st.ans[st.cur] = +o.getAttribute("data-k"); render(); var r = main.querySelector(".res"); if (r) r.scrollIntoView({ behavior: "smooth", block: "nearest" }); return; }
      if (e.target.id === "prev") go(st.cur - 1);
      if (e.target.id === "next") go(st.cur + 1);
      if (e.target.id === "fin") results();
    });
    document.getElementById("palgrid").addEventListener("click", function (e) {
      var b = e.target.closest(".pn"); if (b) go(+b.getAttribute("data-i"));
    });
    document.getElementById("palbtn").onclick = function () { document.getElementById("pal").classList.toggle("open"); };
    document.getElementById("reset").onclick = function () {
      if (confirm("Clear all answers for this paper and start again?")) { st = { ans: {}, cur: 0 }; render(); window.scrollTo(0, 0); }
    };
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") go(st.cur + 1);
      if (e.key === "ArrowLeft") go(st.cur - 1);
      var k = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 }[e.key.toLowerCase()];
      if (k !== undefined && st.ans[st.cur] === undefined && k < Q[st.cur].opts.length) { st.ans[st.cur] = k; render(); }
    });
    render();
  }
})();
