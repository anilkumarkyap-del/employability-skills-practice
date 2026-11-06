(function () {
  var list = document.getElementById("list");
  var lastGroup = null;
  (window.MANIFEST || []).forEach(function (p) {
    if (p.group && p.group !== lastGroup) {
      var h = document.createElement("h3");
      h.className = "grp";
      h.textContent = p.group;
      h.style.cssText = "grid-column:1/-1;margin:18px 0 2px;font-size:17px";
      list.appendChild(h);
    }
    lastGroup = p.group || null;
    if (p.kind === "link") {
      var role = ""; try { role = (JSON.parse(sessionStorage.getItem("es_session") || "{}") || {}).r || ""; } catch (e) {}
      if ((p.adminOnly && role !== "admin") || (p.studentOnly && role === "admin")) { if (list.lastChild && list.lastChild.className === "grp" && !(p.group && (window.MANIFEST||[]).some(function (z) { return z !== p && z.group === p.group && !((z.adminOnly && role !== "admin") || (z.studentOnly && role === "admin")); }))) list.removeChild(list.lastChild); return; }
      var la = document.createElement("a");
      la.className = "card"; la.href = p.href;
      la.innerHTML = "<h2></h2><p></p><span class='badge'></span>";
      la.querySelector("h2").textContent = p.title; la.querySelector("p").textContent = p.subtitle || "";
      la.querySelector(".badge").textContent = "Open";
      la.querySelector(".badge").style.background = "var(--key)";
      list.appendChild(la);
      return;
    }
    if (p.kind === "notes") {
      var rd = 0;
      try { var ns = JSON.parse(localStorage.getItem("notes:" + (window.ES_USER || "") + ":" + p.notesId) || "null"); if (ns && ns.read) rd = Object.keys(ns.read).length; } catch (e) {}
      var na = document.createElement("a");
      na.className = "card";
      na.href = p.href;
      na.innerHTML = "<h2></h2><p></p><span class='badge'></span>";
      na.querySelector("h2").textContent = p.title;
      na.querySelector("p").textContent = p.subtitle || "";
      na.querySelector(".badge").textContent = rd ? rd + " of 7 units read – continue" : "Read notes";
      na.querySelector(".badge").style.background = "var(--key)";
      list.appendChild(na);
      return;
    }
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem("practice:" + (window.ES_USER || "") + ":" + p.id) || "null"); } catch (e) {}
    var done = saved && saved.ans ? Object.keys(saved.ans).length : 0;
    var a = document.createElement("a");
    a.className = "card";
    a.href = "paper.html?p=" + encodeURIComponent(p.id);
    a.innerHTML = "<h2></h2><p></p><span class='badge'></span>";
    a.querySelector("h2").textContent = p.title;
    a.querySelector("p").textContent = p.subtitle || "";
    a.querySelector(".badge").textContent = done ? done + " answered – continue" : "Start";
    list.appendChild(a);
  });
})();
