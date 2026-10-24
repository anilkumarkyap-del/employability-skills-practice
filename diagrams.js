/* Generic diagram drawer. A paper file only supplies data, e.g.
   window.PAPERS.paper1.diagrams = { 24:{t:"path",pts:[[0,0],[0,12],[5,12]],...}, ... } */
(function () {
  var uid = 0;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.s || 12) + '"' +
      (o.b ? ' font-weight="700"' : "") + (o.c ? ' class="' + o.c + '"' : "") + ">" + esc(s) + "</text>";
  }
  function svg(w, h, inner) { return '<svg class="dg" viewBox="0 0 ' + w + " " + h + '" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>"; }

  function path(d) {
    var id = "ar" + (++uid), W = 380, H = 270, px = 62, py = 38, P = d.pts;
    var xs = P.map(function (p) { return p[0]; }), ys = P.map(function (p) { return p[1]; });
    var minx = Math.min.apply(0, xs), maxx = Math.max.apply(0, xs), miny = Math.min.apply(0, ys), maxy = Math.max.apply(0, ys);
    var sc = Math.min((W - 2 * px) / Math.max(maxx - minx, 1), (H - 2 * py) / Math.max(maxy - miny, 1));
    var ox = px + ((W - 2 * px) - (maxx - minx) * sc) / 2, oy = py + ((H - 2 * py) - (maxy - miny) * sc) / 2;
    function X(x) { return ox + (x - minx) * sc; }
    function Y(y) { return H - oy - (y - miny) * sc; }
    var s = '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="dg-ah"/></marker></defs>';
    s += '<g><line x1="' + (W - 28) + '" y1="52" x2="' + (W - 28) + '" y2="22" class="dg-comp" marker-end="url(#' + id + ')"/>' + T(W - 28, 16, "N", { b: 1 }) + "</g>";
    var a = P[0], z = P[P.length - 1];
    if (d.dist) {
      s += '<line x1="' + X(a[0]) + '" y1="' + Y(a[1]) + '" x2="' + X(z[0]) + '" y2="' + Y(z[1]) + '" class="dg-dash"/>';
      var mx = (X(a[0]) + X(z[0])) / 2, my = (Y(a[1]) + Y(z[1])) / 2;
      var hor = Math.abs(X(z[0]) - X(a[0])) > Math.abs(Y(z[1]) - Y(a[1]));
      s += hor ? T(mx, my - 7, d.dist, { b: 1, c: "dg-bad" }) : T(mx + 8, my + 4, d.dist, { b: 1, c: "dg-bad", a: "start" });
    }
    for (var i = 0; i < P.length - 1; i++) {
      var x1 = X(P[i][0]), y1 = Y(P[i][1]), x2 = X(P[i + 1][0]), y2 = Y(P[i + 1][1]);
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="dg-line" marker-end="url(#' + id + ')"/>';
      var lx = (x1 + x2) / 2, ly = (y1 + y2) / 2, lab = (d.labels || [])[i] || "";
      s += Math.abs(x2 - x1) > Math.abs(y2 - y1) ? T(lx, ly + (i % 2 ? 16 : -8), lab, { s: 11, b: 1 }) : T(lx + 14, ly + 4, lab, { s: 11, b: 1, a: "start" });
    }
    s += '<circle cx="' + X(a[0]) + '" cy="' + Y(a[1]) + '" r="6" class="dg-dots"/>' + T(X(a[0]), Y(a[1]) + 20, d.sl || "Start", { s: 11, b: 1 });
    s += '<circle cx="' + X(z[0]) + '" cy="' + Y(z[1]) + '" r="6" class="dg-dote"/>' + T(X(z[0]) + 9, Y(z[1]) - 9, d.el || "End", { s: 11, b: 1, a: "start" });
    return svg(W, H, s);
  }

  function clock(d) {
    var cx = 130, cy = 120, r = 98, s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="dg-face"/>';
    for (var k = 1; k <= 12; k++) {
      var a = k * Math.PI / 6;
      s += '<line x1="' + (cx + (r - 8) * Math.sin(a)) + '" y1="' + (cy - (r - 8) * Math.cos(a)) + '" x2="' + (cx + r * Math.sin(a)) + '" y2="' + (cy - r * Math.cos(a)) + '" class="dg-tick"/>';
      s += T(cx + (r - 20) * Math.sin(a), cy - (r - 20) * Math.cos(a) + 4, k, { s: 11 });
    }
    var ah = (d.h % 12) * 30 + d.m * 0.5, am = d.m * 6;
    function pt(L, ang) { var q = ang * Math.PI / 180; return [cx + L * Math.sin(q), cy - L * Math.cos(q)]; }
    var lo = Math.min(ah, am), hi = Math.max(ah, am), diff = hi - lo, p1, p2, arcStart, arcEnd, mid;
    if (diff <= 180) { arcStart = lo; arcEnd = hi; } else { arcStart = hi; arcEnd = lo + 360; diff = 360 - diff; }
    p1 = pt(34, arcStart); p2 = pt(34, arcEnd); mid = pt(52, (arcStart + arcEnd) / 2);
    s += '<path d="M' + p1[0] + " " + p1[1] + " A34 34 0 0 1 " + p2[0] + " " + p2[1] + '" class="dg-arc"/>';
    var h = pt(56, ah), m = pt(80, am);
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + h[0] + '" y2="' + h[1] + '" class="dg-hand h"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + m[0] + '" y2="' + m[1] + '" class="dg-hand m"/><circle cx="' + cx + '" cy="' + cy + '" r="4" class="dg-dots"/>';
    s += T(mid[0], mid[1] + 4, Math.round(diff * 10) / 10 + "°", { b: 1, s: 12, c: "dg-bad" });
    s += '<rect x="250" y="80" width="14" height="6" class="dg-hbox"/>' + T(270, 87, "Hour hand " + ah + "°", { a: "start", s: 11 });
    s += '<rect x="250" y="104" width="14" height="6" class="dg-mbox"/>' + T(270, 111, "Minute hand " + am + "°", { a: "start", s: 11 });
    return svg(420, 240, s);
  }

  function bars(d) {
    var W = 380, H = 230, L = 36, B = 32, n = d.labels.length, ns = d.s.length;
    var mx = 0; d.s.forEach(function (q) { q.v.forEach(function (v) { if (v > mx) mx = v; }); });
    var top = d.top || Math.ceil(mx / 500) * 500, gw = (W - L - 10) / n, bw = Math.min(26, gw / (ns + 1)), s = "";
    for (var g = 0; g <= 4; g++) {
      var yy = 20 + (H - B - 20) * (1 - g / 4);
      s += '<line x1="' + L + '" y1="' + yy + '" x2="' + (W - 6) + '" y2="' + yy + '" class="dg-grid"/>' + T(L - 4, yy + 4, Math.round(top * g / 4), { a: "end", s: 9 });
    }
    d.labels.forEach(function (lb, i) {
      var gx = L + i * gw + (gw - bw * ns) / 2;
      d.s.forEach(function (q, j) {
        var hh = (H - B - 20) * q.v[i] / top, x = gx + j * bw, y = H - B - hh;
        s += '<rect x="' + x + '" y="' + y + '" width="' + (bw - 2) + '" height="' + hh + '" class="dg-b' + (j + 1) + '"/>' + T(x + bw / 2 - 1, y - 3, q.v[i], { s: 8 });
      });
      s += T(L + i * gw + gw / 2, H - B + 16, (d.pre || "College ") + lb, { s: 10 });
    });
    d.s.forEach(function (q, j) { s += '<rect x="' + (L + 10 + j * 90) + '" y="4" width="12" height="8" class="dg-b' + (j + 1) + '"/>' + T(L + 26 + j * 90, 12, q.n, { a: "start", s: 10 }); });
    return svg(W, H, s);
  }

  function stack(d) {
    var W = 380, tot = 0, x = 10, s = "", cls = { "": "dg-p1", bad: "dg-p2", mut: "dg-p3" };
    d.parts.forEach(function (p) { tot += p[1]; });
    var avail = W - 20, w = d.parts.map(function (p) { return Math.max(34, avail * p[1] / tot); });
    var sum = w.reduce(function (a, b) { return a + b; }, 0), k = avail / sum;
    d.parts.forEach(function (p, i) {
      var ww = w[i] * k;
      s += '<rect x="' + x + '" y="40" width="' + ww + '" height="46" class="' + cls[p[2] || ""] + '"/>';
      s += T(x + ww / 2, 68, p[1], { b: 1, s: 14, c: "dg-w" }) + T(x + ww / 2, 30, p[0], { s: 10 });
      x += ww;
    });
    return svg(W, 104, s);
  }

  function shape(d) {
    var s = "";
    if (d.k === "rect") {
      var w = 200, h = 200 * d.h / d.w;
      s += '<rect x="130" y="30" width="' + w + '" height="' + h + '" class="dg-sh"/>' + T(230, 30 + h / 2 + 5, d.c, { b: 1 }) + T(230, 22, d.wl, { s: 11 }) + T(124, 30 + h / 2 + 4, d.hl, { s: 11, a: "end" });
      return svg(380, 60 + h, s);
    }
    if (d.k === "square") {
      s += '<rect x="130" y="34" width="120" height="120" class="dg-sh"/>' + T(190, 98, "Area 144", { b: 1 }) + T(190, 26, d.s, { s: 11 }) + T(124, 98, d.s, { s: 11, a: "end" }) + T(190, 176, d.c, { s: 11 });
      return svg(380, 190, s);
    }
    s += '<circle cx="190" cy="100" r="70" class="dg-sh"/><line x1="190" y1="100" x2="260" y2="100" class="dg-line"/><circle cx="190" cy="100" r="3" class="dg-dots"/>' + T(226, 92, d.r, { s: 11, b: 1 }) + T(190, 196, d.c, { b: 1, s: 12 });
    return svg(380, 210, s);
  }

  function nest(d) {
    var s = "", n = d.names.length;
    d.names.forEach(function (nm, i) {
      var r = 100 - i * 32, cy = 110 + i * 32;
      s += '<circle cx="190" cy="' + cy + '" r="' + r + '" class="dg-v v' + i + '"/>' + T(190, cy - r + 17, nm, { b: 1, s: 12 });
    });
    return svg(380, 220, s);
  }

  function vsub(d) {
    var s = '<circle cx="150" cy="105" r="88" class="dg-v v0"/>' + T(130, 36, d.outer, { b: 1 });
    s += '<circle cx="110" cy="115" r="40" class="dg-v v1"/>' + T(110, 119, d.inner, { b: 1, s: 11 });
    s += '<circle cx="268" cy="105" r="62" class="dg-v v2"/>' + T(298, 109, d.other, { b: 1, s: 11 });
    s += T(190, 205, "Mobile phones overlap only PART of Computers –", { s: 10 }) + T(190, 218, "that part may lie away from Laptops.", { s: 10 });
    return svg(380, 226, s);
  }

  function vwomen() {
    var s = '<circle cx="190" cy="108" r="96" class="dg-v v0"/>' + T(190, 30, "WOMEN", { b: 1 });
    s += '<circle cx="152" cy="112" r="52" class="dg-v v1"/><circle cx="228" cy="112" r="52" class="dg-v v2"/>';
    s += T(126, 116, "Sisters", { b: 1, s: 11 }) + T(254, 116, "Mothers", { b: 1, s: 11 }) + T(190, 116, "Both", { s: 10 });
    return svg(380, 214, s);
  }

  function faces(d) {
    var s = "";
    for (var i = 1; i <= d.n; i++) {
      var x = 20 + (i - 1) * 58, on = d.hi.indexOf(i) >= 0;
      s += '<rect x="' + x + '" y="20" width="46" height="46" rx="8" class="' + (on ? "dg-node g" : "dg-node") + '"/>' + T(x + 23, 50, i, { b: 1, s: 18, c: on ? "dg-w" : "" });
    }
    return svg(380, 86, s);
  }

  function week(d) {
    var D = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], s = "";
    D.forEach(function (n, i) {
      var x = 8 + i * 52, on = i === d.from || i === d.to;
      s += '<rect x="' + x + '" y="24" width="46" height="40" rx="8" class="' + (on ? "dg-node g" : "dg-node") + '"/>' + T(x + 23, 49, n, { b: 1, s: 12, c: on ? "dg-w" : "" });
    });
    var id = "ar" + (++uid);
    s += '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="dg-ah"/></marker></defs>';
    var x1 = 8 + d.from * 52 + 23, x2 = 8 + d.to * 52 + 23;
    s += '<path d="M' + x1 + " 70 Q" + (x1 + x2) / 2 + " 100 " + x2 + ' 70" class="dg-line" marker-end="url(#' + id + ')"/>' + T((x1 + x2) / 2, 100, d.cap, { s: 11, b: 1 });
    return svg(380, 110, s);
  }

  function tree(d) {
    var s = "", N = {}, w = 124, h = 32, maxy = 0;
    d.nodes.forEach(function (n) { N[n.id] = n; if (n.y > maxy) maxy = n.y; });
    d.edges.forEach(function (e) {
      var a = N[e[0]], b = N[e[1]];
      if (e[2] === "m") {
        var l = a.x < b.x ? a : b, r = a.x < b.x ? b : a;
        s += '<line x1="' + (l.x + w / 2) + '" y1="' + (l.y - 3) + '" x2="' + (r.x - w / 2) + '" y2="' + (r.y - 3) + '" class="dg-line"/><line x1="' + (l.x + w / 2) + '" y1="' + (l.y + 3) + '" x2="' + (r.x - w / 2) + '" y2="' + (r.y + 3) + '" class="dg-line"/>';
      } else {
        var my = (a.y + h / 2 + b.y - h / 2) / 2;
        s += '<path d="M' + a.x + " " + (a.y + h / 2) + " V" + my + " H" + b.x + " V" + (b.y - h / 2) + '" class="dg-line"/>';
      }
    });
    d.nodes.forEach(function (n) {
      s += '<rect x="' + (n.x - w / 2) + '" y="' + (n.y - h / 2) + '" width="' + w + '" height="' + h + '" rx="8" class="' + (n.c === "g" ? "dg-node g" : "dg-node") + '"/>' + T(n.x, n.y + 4, n.t, { s: 11, b: 1, c: n.c === "g" ? "dg-w" : "" });
    });
    return svg(d.w || 340, maxy + 30, s);
  }


  function compass(d) {
    var id = "cp" + (++uid), cx = 130, cy = 120, r = 92, s = "";
    var N = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"], cl = ["dg-a1", "dg-a2", "dg-a3"];
    s += "<defs>" + cl.map(function (c, i) { return '<marker id="' + id + i + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="' + c + 'f"/></marker>'; }).join("") + "</defs>";
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="dg-face"/>';
    N.forEach(function (n, i) { var a = i * Math.PI / 4; s += T(cx + (r + 14) * Math.sin(a), cy - (r + 14) * Math.cos(a) + 4, n, { b: 1, s: 11 }); });
    d.arrows.forEach(function (ar, i) {
      var a = ar.deg * Math.PI / 180, L = 78 - i * 6, k = Math.min(i, 2);
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + L * Math.sin(a)) + '" y2="' + (cy - L * Math.cos(a)) + '" class="dg-arr ' + cl[k] + '" marker-end="url(#' + id + k + ')"/>';
      s += '<rect x="262" y="' + (70 + i * 26) + '" width="14" height="6" class="' + cl[k] + 'f"/>' + T(282, 77 + i * 26, ar.l, { a: "start", s: 11 });
    });
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="4" class="dg-dots"/>';
    return svg(460, 250, s);
  }

  function circles(d) {
    var s = "";
    d.items.forEach(function (c) {
      s += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + c.r + '" class="dg-v v' + (c.v || 0) + '"' + (c.dash ? ' style="stroke-dasharray:6 4"' : "") + "/>" + T(c.lx, c.ly, c.l, { b: 1, s: c.s || 12 });
    });
    (d.notes || []).forEach(function (n, i) { s += T(190, (d.H || 226) - 16 + i * 13, n, { s: 10 }); });
    return svg(380, d.H || 226, s);
  }

  function face(cx, cy, r, h, m, title) {
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="dg-face"/>';
    for (var k = 1; k <= 12; k++) {
      var a = k * Math.PI / 6;
      s += '<line x1="' + (cx + (r - 6) * Math.sin(a)) + '" y1="' + (cy - (r - 6) * Math.cos(a)) + '" x2="' + (cx + r * Math.sin(a)) + '" y2="' + (cy - r * Math.cos(a)) + '" class="dg-tick"/>';
      if (k % 3 === 0) s += T(cx + (r - 16) * Math.sin(a), cy - (r - 16) * Math.cos(a) + 4, k, { s: 10 });
    }
    var ah = (h % 12) * 30 + m * 0.5, am = m * 6;
    function pt(L, g) { var q = g * Math.PI / 180; return [cx + L * Math.sin(q), cy - L * Math.cos(q)]; }
    var p = pt(r * 0.5, ah), q = pt(r * 0.78, am);
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0] + '" y2="' + p[1] + '" class="dg-hand h"/><line x1="' + cx + '" y1="' + cy + '" x2="' + q[0] + '" y2="' + q[1] + '" class="dg-hand m"/><circle cx="' + cx + '" cy="' + cy + '" r="3" class="dg-dots"/>';
    return s + T(cx, cy + r + 18, title, { b: 1, s: 11 });
  }
  function clockpair(d) {
    var s = face(105, 90, 72, d.a[0], d.a[1], d.a[2]) + face(305, 90, 72, d.b[0], d.b[1], d.b[2]);
    s += '<path d="M185 90 H225" class="dg-line" style="marker-end:none"/>' + T(205, 80, d.mid || "→", { b: 1, s: 12, c: "dg-bad" });
    return svg(410, 200, s);
  }

  function ring(d) {
    var n = d.seats.length, cx = 150, cy = 112, R = 78, s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="dg-face"/>' + T(cx, cy + 4, "centre", { s: 11 });
    d.seats.forEach(function (nm, i) {
      var a = i * 2 * Math.PI / n, x = cx + R * Math.sin(a), y = cy - R * Math.cos(a), on = d.hi && d.hi.indexOf(i) >= 0;
      var ix = cx + (R - 36) * Math.sin(a), iy = cy - (R - 36) * Math.cos(a);
      s += '<line x1="' + (cx + (R - 22) * Math.sin(a)) + '" y1="' + (cy - (R - 22) * Math.cos(a)) + '" x2="' + ix + '" y2="' + iy + '" class="dg-comp"/>';
      s += '<circle cx="' + x + '" cy="' + y + '" r="19" class="' + (on ? "dg-node g" : "dg-node") + '"/>' + T(x, y + 5, nm, { b: 1, s: 15, c: on ? "dg-w" : "" });
    });
    s += T(300, 70, "Facing the centre:", { a: "start", b: 1, s: 11 }) + T(300, 90, "Left = clockwise side", { a: "start", s: 11 }) + T(300, 108, "Right = anticlockwise side", { a: "start", s: 11 });
    return svg(470, 214, s);
  }

  function panel(kind, i, hi) {
    var x0 = 12 + i * 98, cx = x0 + 45, cy = 52, s = "", c = "dg-v v0";
    if (kind === "sep") { s = '<circle cx="' + cx + '" cy="' + cy + '" r="42" class="' + c + '"/><circle cx="' + (cx - 14) + '" cy="' + cy + '" r="11" class="dg-v v1"/><circle cx="' + (cx + 14) + '" cy="' + cy + '" r="11" class="dg-v v2"/>'; }
    if (kind === "tri") { s = '<circle cx="' + (cx - 11) + '" cy="' + (cy - 11) + '" r="22" class="dg-v v0"/><circle cx="' + (cx + 11) + '" cy="' + (cy - 11) + '" r="22" class="dg-v v1"/><circle cx="' + cx + '" cy="' + (cy + 11) + '" r="22" class="dg-v v2"/>'; }
    if (kind === "nest") { s = '<circle cx="' + cx + '" cy="' + cy + '" r="42" class="dg-v v0"/><circle cx="' + cx + '" cy="' + (cy + 8) + '" r="28" class="dg-v v1"/><circle cx="' + cx + '" cy="' + (cy + 15) + '" r="14" class="dg-v v2"/>'; }
    if (kind === "row") { s = '<circle cx="' + (cx - 30) + '" cy="' + cy + '" r="13" class="dg-v v0"/><circle cx="' + cx + '" cy="' + cy + '" r="13" class="dg-v v1"/><circle cx="' + (cx + 30) + '" cy="' + cy + '" r="13" class="dg-v v2"/>'; }
    if (kind === "ov") { s = '<circle cx="' + cx + '" cy="' + cy + '" r="42" class="' + c + '"/><circle cx="' + (cx - 11) + '" cy="' + cy + '" r="17" class="dg-v v1"/><circle cx="' + (cx + 11) + '" cy="' + cy + '" r="17" class="dg-v v2"/>'; }
    var f = hi ? '<rect x="' + (x0 - 2) + '" y="4" width="94" height="124" rx="10" class="dg-hi"/>' : "";
    return f + s + T(cx, 118, "(" + "ABCD"[i] + ")", { b: 1, s: 13, c: hi ? "dg-ok" : "" });
  }
  function vopts(d) {
    var s = ""; d.kinds.forEach(function (k, i) { s += panel(k, i, d.hi === i); });
    return svg(400, 132, s);
  }

  function kab(d) {
    var s = "", hl = d.hi;
    if (hl) s += '<rect x="352" y="470" width="108" height="31" class="dg-hl"/>';
    s += '<rect x="108" y="385" width="352" height="207" class="dg-rf"/><rect x="272" y="343" width="356" height="158" class="dg-rk"/><rect x="352" y="470" width="357" height="202" class="dg-rc"/>';
    [["P", 187, 414], ["Q", 371, 426], ["R", 547, 426], ["S", 405, 490], ["T", 519, 490], ["U", 669, 510], ["V", 405, 545]].forEach(function (l) {
      s += T(l[1], l[2], l[0], { b: 1, s: 17, c: hl && l[0] === "S" ? "dg-ok" : "" });
    });
    s += T(448, 361, "Kabaddi", { b: 1, s: 14, c: "dg-tk" }) + T(203, 573, "Football", { b: 1, s: 14, c: "dg-tf" }) + T(582, 655, "Cricket", { b: 1, s: 14, c: "dg-tc" });
    return '<svg class="dg" viewBox="95 330 630 355" xmlns="http://www.w3.org/2000/svg">' + s + "</svg>";
  }

  var R = { compass: compass, circles: circles, clockpair: clockpair, ring: ring, vopts: vopts, kab: kab, path: path, clock: clock, bars: bars, stack: stack, shape: shape, nest: nest, vsub: vsub, vwomen: vwomen, faces: faces, week: week, tree: tree };
  window.DG = {
    render: function (d) {
      var f = R[d.t]; if (!f) return "";
      return "<div class='dgwrap'>" + f(d) + (d.cap && d.t !== "week" ? "<div class='cap'>" + esc(d.cap) + "</div>" : "") + "</div>";
    }
  };
})();
