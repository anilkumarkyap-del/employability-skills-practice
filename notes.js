(function () {
  var id = (location.search.match(/[?&]n=([^&]+)/) || [])[1] || "fs";
  var N = (window.NOTES || {})[id];
  var body = document.getElementById("ntbody");
  if (!N) { body.innerHTML = "<p class='lead'>These notes were not found.</p>"; return; }
  document.getElementById("ntitle").textContent = N.title;
  document.title = N.title;
  var KEY = "notes:" + (window.ES_USER || "") + ":" + id;
  var st = { read: {}, last: 0, size: 0 };
  try { var s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s) { st.read = s.read || {}; st.last = s.last || 0; st.size = s.size || 0; } } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  var SHORT = { 1: "Internet", 2: "Safety", 3: "Email", 4: "Cover letter", 5: "Resume", 6: "Group discussion", 7: "Interview", 8: "Revision" };
  var pages = [{ n: 0, title: "Overview", short: "Overview", tag: "What you will learn", sections: [{ h: "", blocks: N.overview }] }].concat(N.units.map(function (u) { u.short = SHORT[u.n] || u.title; return u; }));
  var learn = pages.filter(function (p) { return p.n >= 1 && p.n <= 7; });

  function strip(h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent || ""; }
  function blockText(b) {
    if (b.t === "table") return b.head.join(" ") + " " + b.rows.map(function (r) { return strip(r.join(" ")); }).join(" ");
    if (b.t === "ul" || b.t === "steps") return strip(b.items.join(" "));
    if (b.t === "sample") return strip(b.lines.join(" "));
    if (b.t === "box") return b.title + " " + strip(b.html);
    if (b.t === "label") return b.text;
    return strip(b.html || "");
  }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  function blockHtml(b) {
    switch (b.t) {
      case "p": return "<p>" + b.html + "</p>";
      case "label": return "<h4 class='nt-label'>" + esc(b.text) + "</h4>";
      case "ul": return "<ul class='nt-ul'>" + b.items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
      case "steps": return "<ol class='nt-steps'>" + b.items.map(function (x) { return "<li><span>" + x + "</span></li>"; }).join("") + "</ol>";
      case "box": return "<div class='nt-box " + b.kind + "'><b class='nt-bt'>" + esc(b.title) + "</b><div>" + b.html + "</div></div>";
      case "table":
        return "<div class='tw'><table class='nt-table'><thead><tr>" + b.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.rows.map(function (r) { return "<tr>" + r.map(function (x, i) { return "<td" + (i === 0 ? " class='c1'" : "") + ">" + x + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "sample":
        return "<div class='nt-sample'><div class='nt-sh'><span>Sample format</span><button type='button' class='nt-copy'>Copy text</button></div><div class='nt-sb'>" +
          b.lines.map(function (l) { return l ? "<div>" + l + "</div>" : "<div class='gap'></div>"; }).join("") + "</div></div>";
    }
    return "";
  }

  var cur = 0, openAll = true;
  function pageIndexByN(n) { for (var i = 0; i < pages.length; i++) if (pages[i].n === n) return i; return 0; }
  function counts() {
    var c = 0; learn.forEach(function (p) { if (st.read[p.n]) c++; });
    document.getElementById("ntcount").textContent = c + " of " + learn.length + " units read";
    document.getElementById("ntbar").style.width = Math.round(c * 100 / learn.length) + "%";
  }
  function tabs() {
    document.getElementById("nttabs").innerHTML = pages.map(function (p, i) {
      var lab = p.n >= 1 && p.n <= 7 ? p.n + " " + p.short : p.short;
      return "<button type='button' class='nt-tab" + (i === cur ? " on" : "") + (st.read[p.n] ? " done" : "") + "' data-i='" + i + "'>" + (st.read[p.n] ? "✔ " : "") + esc(lab) + "</button>";
    }).join("");
    var on = document.querySelector(".nt-tab.on"); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function render(scrollSec) {
    var p = pages[cur];
    var h = "<h2 class='nt-h'>" + (p.n >= 1 && p.n <= 7 ? "<span>Unit " + p.n + "</span>" : "") + esc(p.title) + "</h2><p class='nt-tag'>" + esc(p.tag || "") + "</p>";
    if (p.sections.length > 1) h += "<div class='nt-tools'><button type='button' id='ntall' class='ghost small2'>" + (openAll ? "Collapse all" : "Expand all") + "</button></div>";
    p.sections.forEach(function (s, si) {
      var inner = s.blocks.map(blockHtml).join("");
      if (s.h) h += "<details class='nt-sec' id='s" + si + "'" + (openAll ? " open" : "") + "><summary>" + esc(s.h) + "</summary><div class='nt-in'>" + inner + "</div></details>";
      else h += "<div class='nt-in plain'>" + inner + "</div>";
    });
    h += "<div class='nt-foot'>";
    if (p.n >= 1 && p.n <= 7) h += "<label class='nt-read'><input type='checkbox' id='ntread'" + (st.read[p.n] ? " checked" : "") + "> I have read this unit</label>";
    h += "<div class='nt-nav'><button type='button' class='btn' id='ntprev'" + (cur === 0 ? " disabled" : "") + ">&larr; Previous</button><button type='button' class='btn primary' id='ntnext'" + (cur === pages.length - 1 ? " disabled" : "") + ">Next &rarr;</button></div>";
    h += "</div>";
    body.innerHTML = h; tabs(); counts();
    st.last = cur; save();
    if (typeof scrollSec === "number") {
      var el = document.getElementById("s" + scrollSec);
      if (el) { el.open = true; el.classList.add("hit"); setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); setTimeout(function () { el.classList.remove("hit"); }, 2500); }
    } else window.scrollTo(0, 0);
  }
  function go(i, sec) { cur = Math.max(0, Math.min(pages.length - 1, i)); render(sec); }

  document.getElementById("nttabs").addEventListener("click", function (e) { var b = e.target.closest(".nt-tab"); if (b) go(+b.getAttribute("data-i")); });
  body.addEventListener("click", function (e) {
    var t = e.target;
    if (t.id === "ntprev") go(cur - 1); else if (t.id === "ntnext") go(cur + 1);
    else if (t.id === "ntall") { openAll = !openAll; var ds = body.querySelectorAll("details.nt-sec"); for (var i = 0; i < ds.length; i++) ds[i].open = openAll; t.textContent = openAll ? "Collapse all" : "Expand all"; }
    else if (t.classList && t.classList.contains("nt-copy")) {
      var box = t.closest(".nt-sample").querySelector(".nt-sb"), txt = Array.prototype.map.call(box.children, function (d) { return d.textContent; }).join("\n");
      var done = function () { t.textContent = "Copied ✔"; setTimeout(function () { t.textContent = "Copy text"; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { fallback(txt); done(); });
      else { fallback(txt); done(); }
    }
  });
  function fallback(txt) { var ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} ta.remove(); }
  body.addEventListener("change", function (e) { if (e.target.id === "ntread") { var n = pages[cur].n; if (e.target.checked) st.read[n] = true; else delete st.read[n]; save(); tabs(); counts(); } });

  // text size
  function applySize() { document.getElementById("nt").style.fontSize = [1, 1.12, 1.25][st.size] + "rem"; document.getElementById("fsz").textContent = ["A+", "A++", "A"][st.size]; }
  document.getElementById("fsz").onclick = function () { st.size = (st.size + 1) % 3; applySize(); save(); };
  applySize();

  // search
  var idx = [];
  pages.forEach(function (p, pi) { p.sections.forEach(function (s, si) { idx.push({ pi: pi, si: s.h ? si : null, unit: p.n >= 1 && p.n <= 7 ? "Unit " + p.n : p.title, head: s.h || p.title, text: (s.h + " " + s.blocks.map(blockText).join(" ")).replace(/\s+/g, " ") }); }); });
  var sbox = document.getElementById("ntsearch"), rbox = document.getElementById("ntres");
  sbox.addEventListener("input", function () {
    var q = sbox.value.trim().toLowerCase();
    if (q.length < 2) { rbox.hidden = true; rbox.innerHTML = ""; return; }
    var words = q.split(/\s+/), out = [];
    idx.forEach(function (it) {
      var low = it.text.toLowerCase(), ok = words.every(function (w) { return low.indexOf(w) >= 0; });
      if (!ok) return;
      var pos = low.indexOf(words[0]), from = Math.max(0, pos - 40), snip = it.text.substr(from, 110);
      out.push("<button type='button' class='nt-hit' data-pi='" + it.pi + "' data-si='" + (it.si === null ? "" : it.si) + "'><b>" + esc(it.unit + " – " + it.head) + "</b><span>" + (from > 0 ? "…" : "") + esc(snip) + "…</span></button>");
    });
    rbox.hidden = false;
    rbox.innerHTML = out.length ? "<div class='nt-rc'>" + out.length + " result" + (out.length > 1 ? "s" : "") + "</div>" + out.slice(0, 12).join("") : "<div class='nt-rc'>No matches. Try another word.</div>";
  });
  rbox.addEventListener("click", function (e) {
    var b = e.target.closest(".nt-hit"); if (!b) return;
    rbox.hidden = true; sbox.value = "";
    var si = b.getAttribute("data-si");
    go(+b.getAttribute("data-pi"), si === "" ? undefined : +si);
  });

  var startN = (location.search.match(/[?&]u=(\d+)/) || [])[1];
  go(startN !== undefined ? pageIndexByN(+startN) : (st.last > 0 && st.last < pages.length ? st.last : 0));
})();
