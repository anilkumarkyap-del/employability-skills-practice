/* Makes Excel (.xlsx) and PDF files in the browser. No outside libraries. */
(function () {
  var enc = new TextEncoder();
  var T = (function () { var t = [], c, n, k; for (n = 0; n < 256; n++) { c = n; for (k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files) {
    var parts = [], central = [], off = 0;
    files.forEach(function (f) {
      var nm = enc.encode(f.name), d = f.data, crc = crc32(d);
      var h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0, true); h.setUint16(8, 0, true);
      h.setUint16(10, 0, true); h.setUint16(12, 0x21, true); h.setUint32(14, crc, true); h.setUint32(18, d.length, true); h.setUint32(22, d.length, true);
      h.setUint16(26, nm.length, true); h.setUint16(28, 0, true);
      parts.push(new Uint8Array(h.buffer), nm, d);
      var c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0, true); c.setUint16(10, 0, true);
      c.setUint16(12, 0, true); c.setUint16(14, 0x21, true); c.setUint32(16, crc, true); c.setUint32(20, d.length, true); c.setUint32(24, d.length, true);
      c.setUint16(28, nm.length, true); c.setUint16(30, 0, true); c.setUint16(32, 0, true); c.setUint16(34, 0, true); c.setUint16(36, 0, true); c.setUint32(38, 0, true); c.setUint32(42, off, true);
      central.push(new Uint8Array(c.buffer), nm);
      off += 30 + nm.length + d.length;
    });
    var csize = central.reduce(function (a, b) { return a + b.length; }, 0);
    var e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, off, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
  function x(s) { return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function col(n) { var s = ""; n++; while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
  function xlsx(sheetName, rows) {
    var widths = [];
    rows.forEach(function (r) { r.forEach(function (v, i) { var l = String(v === null || v === undefined ? "" : v).length; widths[i] = Math.max(widths[i] || 8, Math.min(60, l + 3)); }); });
    var sd = rows.map(function (r, ri) {
      return "<row r='" + (ri + 1) + "'>" + r.map(function (v, ci) {
        var ref = col(ci) + (ri + 1), st = ri === 0 ? " s='1'" : "";
        if (v === null || v === undefined || v === "") return "<c r='" + ref + "'" + st + "/>";
        if (typeof v === "number") return "<c r='" + ref + "'" + st + "><v>" + v + "</v></c>";
        return "<c r='" + ref + "' t='inlineStr'" + st + "><is><t xml:space='preserve'>" + x(v) + "</t></is></c>";
      }).join("") + "</row>";
    }).join("");
    var sheet = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><worksheet xmlns='http://schemas.openxmlformats.org/spreadsheetml/2006/main'><sheetViews><sheetView workbookViewId='0'><pane ySplit='1' topLeftCell='A2' activePane='bottomLeft' state='frozen'/></sheetView></sheetViews><cols>" +
      widths.map(function (w, i) { return "<col min='" + (i + 1) + "' max='" + (i + 1) + "' width='" + w + "' customWidth='1'/>"; }).join("") + "</cols><sheetData>" + sd + "</sheetData></worksheet>";
    var nm = x(sheetName).replace(/[\\\/\?\*\[\]:]/g, " ").slice(0, 31) || "Sheet1";
    var files = [
      ["[Content_Types].xml", "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Types xmlns='http://schemas.openxmlformats.org/package/2006/content-types'><Default Extension='rels' ContentType='application/vnd.openxmlformats-package.relationships+xml'/><Default Extension='xml' ContentType='application/xml'/><Override PartName='/xl/workbook.xml' ContentType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml'/><Override PartName='/xl/worksheets/sheet1.xml' ContentType='application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml'/><Override PartName='/xl/styles.xml' ContentType='application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml'/></Types>"],
      ["_rels/.rels", "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Relationships xmlns='http://schemas.openxmlformats.org/package/2006/relationships'><Relationship Id='rId1' Type='http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument' Target='xl/workbook.xml'/></Relationships>"],
      ["xl/workbook.xml", "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><workbook xmlns='http://schemas.openxmlformats.org/spreadsheetml/2006/main' xmlns:r='http://schemas.openxmlformats.org/officeDocument/2006/relationships'><sheets><sheet name='" + nm + "' sheetId='1' r:id='rId1'/></sheets></workbook>"],
      ["xl/_rels/workbook.xml.rels", "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Relationships xmlns='http://schemas.openxmlformats.org/package/2006/relationships'><Relationship Id='rId1' Type='http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet' Target='worksheets/sheet1.xml'/><Relationship Id='rId2' Type='http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles' Target='styles.xml'/></Relationships>"],
      ["xl/styles.xml", "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><styleSheet xmlns='http://schemas.openxmlformats.org/spreadsheetml/2006/main'><fonts count='2'><font><sz val='11'/><name val='Calibri'/></font><font><b/><sz val='11'/><color rgb='FFFFFFFF'/><name val='Calibri'/></font></fonts><fills count='3'><fill><patternFill patternType='none'/></fill><fill><patternFill patternType='gray125'/></fill><fill><patternFill patternType='solid'><fgColor rgb='FF0B6E5F'/></patternFill></fill></fills><borders count='1'><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count='1'><xf numFmtId='0' fontId='0' fillId='0' borderId='0'/></cellStyleXfs><cellXfs count='2'><xf numFmtId='0' fontId='0' fillId='0' borderId='0' xfId='0'/><xf numFmtId='0' fontId='1' fillId='2' borderId='0' xfId='0' applyFont='1' applyFill='1'/></cellXfs><cellStyles count='1'><cellStyle name='Normal' xfId='0' builtinId='0'/></cellStyles></styleSheet>"],
      ["xl/worksheets/sheet1.xml", sheet]
    ].map(function (f) { return { name: f[0], data: enc.encode(f[1]) }; });
    return zip(files);
  }
  // ---------- PDF ----------
  function lat(s) { s = String(s === null || s === undefined ? "" : s); var o = ""; for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); o += c < 256 ? s[i] : (c === 8211 || c === 8212 ? "-" : c === 8217 || c === 8216 ? "'" : "?"); } return o; }
  function pe(s) { return lat(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)"); }
  function fit(s, w, size) { s = lat(s); var max = Math.max(1, Math.floor(w / (size * 0.53))); return s.length > max ? s.slice(0, max - 1) + "." : s; }
  function pdf(o) {
    var W = o.landscape ? 842 : 595, H = o.landscape ? 595 : 842, M = 36, size = 10, rh = 20;
    var tot = o.widths.reduce(function (a, b) { return a + b; }, 0), cw = o.widths.map(function (w) { return (W - 2 * M) * w / tot; });
    var pages = [], cs = "", y = H - M;
    function head() {
      var s = "0.043 0.431 0.373 rg " + M + " " + (y - 5) + " " + (W - 2 * M) + " " + rh + " re f 1 1 1 rg BT /F2 " + size + " Tf ";
      var xx = M; o.head.forEach(function (h, i) { s += "1 0 0 1 " + (xx + 4) + " " + (y + 2) + " Tm (" + pe(fit(h, cw[i] - 8, size)) + ") Tj "; xx += cw[i]; });
      y -= rh; return s + "ET 0 0 0 rg ";
    }
    function newPage(first) {
      if (cs) pages.push(cs);
      cs = ""; y = H - M;
      if (first) {
        cs += "BT /F2 15 Tf 1 0 0 1 " + M + " " + y + " Tm (" + pe(o.title) + ") Tj ET ";
        y -= 20;
        (o.lines || []).forEach(function (l) { cs += "BT /F1 9.5 Tf 0.3 0.3 0.3 rg 1 0 0 1 " + M + " " + y + " Tm (" + pe(l) + ") Tj ET 0 0 0 rg "; y -= 13; });
        y -= 10;
      }
      cs += head();
    }
    newPage(true);
    o.rows.forEach(function (r, ri) {
      if (y < M + rh) newPage(false);
      if (ri % 2) cs += "0.95 0.97 0.97 rg " + M + " " + (y - 5) + " " + (W - 2 * M) + " " + rh + " re f 0 0 0 rg ";
      var s = "BT /F1 " + size + " Tf ", xx = M;
      r.forEach(function (v, i) { s += "1 0 0 1 " + (xx + 4) + " " + (y + 2) + " Tm (" + pe(fit(v, cw[i] - 8, size)) + ") Tj "; xx += cw[i]; });
      cs += s + "ET 0.85 g " + M + " " + (y - 5) + " m " + (W - M) + " " + (y - 5) + " l S 0 g ";
      y -= rh;
    });
    pages.push(cs);
    var n = pages.length, objs = [];
    objs[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    var kids = []; for (var i = 0; i < n; i++) kids.push((5 + i * 2) + " 0 R");
    objs[2] = "<< /Type /Pages /Kids [" + kids.join(" ") + "] /Count " + n + " >>";
    objs[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
    objs[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";
    pages.forEach(function (c, i) {
      var foot = "BT /F1 8 Tf 0.5 g 1 0 0 1 " + (W / 2 - 20) + " 18 Tm (Page " + (i + 1) + " of " + n + ") Tj ET ";
      var body = c + foot;
      objs[5 + i * 2] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + W + " " + H + "] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents " + (6 + i * 2) + " 0 R >>";
      objs[6 + i * 2] = "<< /Length " + body.length + " >>\nstream\n" + body + "\nendstream";
    });
    var out = "%PDF-1.4\n", offs = [];
    for (var k = 1; k < objs.length; k++) { offs[k] = out.length; out += k + " 0 obj\n" + objs[k] + "\nendobj\n"; }
    var xr = out.length; out += "xref\n0 " + objs.length + "\n0000000000 65535 f \n";
    for (k = 1; k < objs.length; k++) out += ("0000000000" + offs[k]).slice(-10) + " 00000 n \n";
    out += "trailer\n<< /Size " + objs.length + " /Root 1 0 R >>\nstartxref\n" + xr + "\n%%EOF";
    var u = new Uint8Array(out.length); for (k = 0; k < out.length; k++) u[k] = out.charCodeAt(k) & 255;
    return new Blob([u], { type: "application/pdf" });
  }
  function csv(rows) { return new Blob(["﻿" + rows.map(function (r) { return r.map(function (v) { v = v === null || v === undefined ? "" : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(","); }).join("\r\n")], { type: "text/csv" }); }
  function save(blob, name) {
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  window.ESExport = { xlsx: xlsx, pdf: pdf, csv: csv, save: save };
})();
