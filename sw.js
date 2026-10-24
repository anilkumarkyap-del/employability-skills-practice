/* Service worker: always tries the network first (so new papers appear at once),
   and falls back to the saved copy when the phone is offline. */
var CACHE = "es-practice-v1";
var CORE = ["index.html","login.html","paper.html","style.css","auth.js","users.js","quiz.js","diagrams.js","home.js","manifest.js","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
  }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(r, copy); }); }
      return res;
    }).catch(function () { return caches.match(r, { ignoreSearch: true }); })
  );
});
