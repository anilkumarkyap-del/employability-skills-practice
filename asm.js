/* Shared helpers for the Assignment pages */
(function () {
  var LET = ["A", "B", "C", "D", "E"];
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML.replace(/&lt;(\/?)sup&gt;/g, "<$1sup>"); }
  function tbl(t) {
    var h = "<div class='tw'><table><thead><tr>" + t.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>";
    t.rows.forEach(function (r) { h += "<tr>" + r.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; });
    return h + "</tbody></table></div>";
  }
  function flowHtml(f) {
    return "<div class='flow'>" + f.map(function (x) {
      if (typeof x === "string") return "<span class='fo'>" + x + "</span>";
      var g = x[2] === "g" ? " g" : "";
      if (!x[1]) return "<div class='fb" + g + "'><b>" + x[0] + "</b></div>";
      return "<div class='fb" + g + "'><small>" + x[0] + "</small><b>" + x[1] + "</b></div>";
    }).join("") + "</div>";
  }
  var loaded = {};
  function loadPaper(id) {
    return new Promise(function (res, rej) {
      if (window.PAPERS && window.PAPERS[id]) return res(window.PAPERS[id]);
      if (loaded[id]) return loaded[id].then(res, rej);
      loaded[id] = new Promise(function (r2, j2) {
        var s = document.createElement("script"); s.src = id + ".js";
        s.onload = function () { window.PAPERS && window.PAPERS[id] ? r2(window.PAPERS[id]) : j2(new Error("missing " + id)); };
        s.onerror = function () { j2(new Error("load " + id)); };
        document.head.appendChild(s);
      });
      loaded[id].then(res, rej);
    });
  }
  function sectionName(P, n) {
    for (var i = 0; i < (P.sections || []).length; i++) if (n >= P.sections[i].from && n <= P.sections[i].to) return P.sections[i].name;
    return "";
  }
  /* question body (no answer shown) */
  function qBody(q) {
    var h = "";
    if (q.note0) h += "<p class='dir'>" + q.note0 + "</p>";
    h += "<p class='qtext'>" + q.q + "</p>";
    if (q.data) h += tbl(q.data);
    if (q.fig && window.DG) h += window.DG.render(q.fig);
    if (q.img) h += "<img class='fig' src='" + q.img + "' alt='Figure'>";
    return h;
  }
  /* full solution block */
  function qSol(q, P, idx) {
    var h = "<div class='sol'><div class='box key'><span class='lab'>KEY IDEA</span><div>" + q.key + "</div></div>";
    if (q.simg) q.simg.forEach(function (m) { h += "<div class='sfigw'><img class='sfig" + (m.leg ? " leg" : "") + (m.small ? " small" : "") + "' src='" + m.src + "' alt='Illustration' loading='lazy'></div>"; });
    if (P.diagrams && P.diagrams[idx + 1] && window.DG) h += window.DG.render(P.diagrams[idx + 1]);
    if (P.flows && P.flows[idx + 1]) h += flowHtml(P.flows[idx + 1]);
    if (q.flow) h += flowHtml(q.flow);
    if (q.tpre) q.tpre.forEach(function (t) { h += tbl(t); });
    if (q.steps) h += "<ol class='steps'>" + q.steps.map(function (x) { return "<li><span class='st'>" + x + "</span></li>"; }).join("") + "</ol>";
    if (q.table) h += tbl(q.table);
    [["tip", "TIP"], ["watch", "WATCH OUT"], ["note", "NOTE"], ["check", "CHECK THIS"]].forEach(function (p) { if (q[p[0]]) h += "<div class='box " + p[0] + "'><span class='lab'>" + p[1] + "</span><div>" + q[p[0]] + "</div></div>"; });
    if (q.extra) h += (q.extraTitle ? "<h4 class='xtitle'>" + q.extraTitle + "</h4>" : "") + tbl(q.extra);
    return h + "</div>";
  }
  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso); if (isNaN(d)) return String(iso);
    return d.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  function papers() { return (window.MANIFEST || []).filter(function (p) { return !p.kind; }); }
  window.ASM = { LET: LET, esc: esc, tbl: tbl, flowHtml: flowHtml, loadPaper: loadPaper, sectionName: sectionName, qBody: qBody, qSol: qSol, fmtDate: fmtDate, papers: papers };
})();
