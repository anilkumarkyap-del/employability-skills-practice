/* Login guard. Loaded in the <head> of every protected page (after users.js). */
(function () {
  var A = window.AUTH || {};
  var enc = new TextEncoder();
  function H(str) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error("nocrypto"));
    return crypto.subtle.digest("SHA-256", enc.encode(str)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b), function (x) { return ("0" + x.toString(16)).slice(-2); }).join("");
    });
  }
  function hu(u) { return H(A.salt + "|u|" + String(u).trim().toUpperCase()); }
  function hp(p) { return H(A.salt + "|p|" + p); }

  function nameKey(u, p) {
    var e = new TextEncoder();
    return crypto.subtle.importKey("raw", e.encode(p), "PBKDF2", false, ["deriveKey"]).then(function (k) {
      return crypto.subtle.deriveKey({ name: "PBKDF2", salt: e.encode(A.salt + "|n|" + String(u).trim().toUpperCase()), iterations: 100000, hash: "SHA-256" }, k, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    });
  }
  function getName(u, p, h) {         // -> Promise<string> ("" if none)
    var blob = A.names && A.names[h];
    if (!blob) return Promise.resolve("");
    return nameKey(u, p).then(function (key) {
      var raw = Uint8Array.from(atob(blob), function (c) { return c.charCodeAt(0); });
      return crypto.subtle.decrypt({ name: "AES-GCM", iv: raw.slice(0, 12) }, key, raw.slice(12));
    }).then(function (b) { return new TextDecoder().decode(b); }).catch(function () { return ""; });
  }
  var pendingName = "";
  function check(u, p) {            // -> Promise<"admin" | "student" | null>
    pendingName = "";
    return Promise.all([hu(u), hp(p)]).then(function (r) {
      if (A.admin && r[0] === A.admin.u && r[1] === A.admin.p) return "admin";
      if (A.students && A.students.indexOf(r[0]) >= 0 && r[1] === A.studentPass) {
        return getName(u, p, r[0]).then(function (n) { pendingName = n; return "student"; });
      }
      return null;
    });
  }
  function start(u, role) {
    var t = Date.now(), name = String(u).trim().toUpperCase();
    return H(A.salt + "|s|" + role + "|" + name + "|" + t).then(function (k) {
      sessionStorage.setItem("es_session", JSON.stringify({ u: name, r: role, t: t, k: k, n: role === "student" ? pendingName : "" }));
    });
  }
  function logout() { try { sessionStorage.removeItem("es_session"); } catch (e) {} location.replace("login.html"); }
  window.ESAuth = { check: check, start: start, logout: logout, H: H };

  if (window.ES_LOGIN === true || typeof document === "undefined") return;

  // ---- protected page ----
  var sess = null;
  try { sess = JSON.parse(sessionStorage.getItem("es_session") || "null"); } catch (e) {}
  window.ES_USER = sess && sess.u ? sess.u : "";

  var hide = document.createElement("style");
  hide.id = "es-hide"; hide.textContent = "html{visibility:hidden}";
  document.head.appendChild(hide);

  function deny() {
    var next = location.pathname.split("/").pop() + location.search;
    location.replace("login.html?next=" + encodeURIComponent(next));
  }
  function ok() {
    var h = document.getElementById("es-hide"); if (h) h.remove();
    document.addEventListener("DOMContentLoaded", addBox);
    if (document.readyState !== "loading") addBox();
  }
  function addRef() {
    if (document.getElementById("es-ref")) return;
    var f = document.createElement("footer"); f.id = "es-ref";
    f.style.cssText = "max-width:900px;margin:28px auto 18px;padding:12px 16px;border-top:1px solid #cbd5e1;font-size:.78rem;line-height:1.5;color:#64748b;text-align:center";
    f.innerHTML = "<b>Source:</b> Manohar, B., &amp; Nagaraja. (2026). <i>Employability skills: As per Mangalore University SEP \u2013 B.Com V Semester syllabus</i> (1st ed.). Professional Books Publisher.";
    document.body.appendChild(f);
  }
  function addBox() {
    addRef();
    if (document.getElementById("es-box")) return;
    var host = document.querySelector(".top .inner"); if (!host) return;
    var st = document.createElement("style");
    st.textContent = "#es-box{display:flex;align-items:center;gap:8px;font-size:.8rem;white-space:nowrap}#es-box a,#es-box button{color:#fff;border:1px solid #fff;background:transparent;border-radius:8px;padding:4px 10px;font:inherit;cursor:pointer;text-decoration:none}@media(max-width:760px){#es-box span{display:none}}";
    document.head.appendChild(st);
    var b = document.createElement("div"); b.id = "es-box";
    b.innerHTML = "<span></span>";
    b.firstChild.textContent = "\u{1F464} " + sess.u;
    if (sess.r === "admin") { var m = document.createElement("a"); m.href = "manage.html"; m.textContent = "Manage"; b.appendChild(m); }
    var x = document.createElement("button"); x.type = "button"; x.textContent = "Logout"; x.onclick = logout; b.appendChild(x);
    host.appendChild(b);
    var bar = document.getElementById("es-who");
    if (!bar && sess.n) {
      bar = document.createElement("div"); bar.id = "es-who";
      bar.style.cssText = "padding:7px 16px;font-size:.85rem;background:var(--card,#fff);border-bottom:1px solid var(--line,#dbe3ea);color:var(--ink,#111)";
      var hd = document.querySelector("header.top"); if (hd && hd.parentNode) hd.parentNode.insertBefore(bar, hd.nextSibling);
      bar.innerHTML = "\u{1F464} <b></b> <span style='color:var(--mut,#64748b)'></span>";
      bar.querySelector("b").textContent = sess.n;
      bar.querySelector("span").textContent = "(" + sess.u + ")";
    }
  }

  if (!sess || !sess.k || Date.now() - sess.t > 12 * 3600 * 1000) return deny();
  H(A.salt + "|s|" + sess.r + "|" + sess.u + "|" + sess.t).then(function (k) {
    if (k !== sess.k) return deny();
    if (window.ES_REQUIRE === "admin" && sess.r !== "admin") { location.replace("index.html"); return; }
    ok();
  }).catch(function () { deny(); });
})();
