/* Talks to your Google Apps Script (the "assignment server"). */
(function () {
  window.ESApi = {
    ready: function () { return typeof window.ES_API === "string" && /^https:\/\//.test(window.ES_API); },
    post: function (body) {
      if (!this.ready()) return Promise.reject(new Error("noapi"));
      var ctl = window.AbortController ? new AbortController() : null;
      var t = ctl ? setTimeout(function () { ctl.abort(); }, 30000) : null;
      return fetch(window.ES_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body), redirect: "follow", signal: ctl ? ctl.signal : undefined })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (t) clearTimeout(t); return j; })
        .catch(function (e) { if (t) clearTimeout(t); throw e; });
    },
    session: function () { try { return JSON.parse(sessionStorage.getItem("es_session") || "null") || {}; } catch (e) { return {}; } }
  };
})();
