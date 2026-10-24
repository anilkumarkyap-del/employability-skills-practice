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

  function check(u, p) {            // -> Promise<"admin" | "student" | null>
    return Promise.all([hu(u), hp(p)]).then(function (r) {
      if (A.admin && r[0] === A.admin.u && r[1] === A.admin.p) return "admin";
      if (A.students && A.students.indexOf(r[0]) >= 0 && r[1] === A.studentPass) return "student";
      return null;
    });
  }
  function start(u, role) {
    var t = Date.now(), name = String(u).trim().toUpperCase();
    return H(A.salt + "|s|" + role + "|" + name + "|" + t).then(function (k) {
      sessionStorage.setItem("es_session", JSON.stringify({ u: name, r: role, t: t, k: k }));
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
  function addBox() {
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
  }

  if (!sess || !sess.k || Date.now() - sess.t > 12 * 3600 * 1000) return deny();
  H(A.salt + "|s|" + sess.r + "|" + sess.u + "|" + sess.t).then(function (k) {
    if (k !== sess.k) return deny();
    if (window.ES_REQUIRE === "admin" && sess.r !== "admin") { location.replace("index.html"); return; }
    ok();
  }).catch(function () { deny(); });
})();
