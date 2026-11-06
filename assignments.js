(function () {
  var main = document.getElementById("main"), S = ESApi.session(), esc = ASM.esc;
  if (S.r === "admin") { main.innerHTML = "<p class='lead'>You are logged in as teacher. <a href='assign-admin.html'>Open Assignment Manager &rarr;</a></p>"; return; }
  if (!ESApi.ready()) { main.innerHTML = "<div class='as-msg'>Assignments are not switched on yet. Please ask your teacher.</div>"; return; }
  function load() {
    main.innerHTML = "<p class='lead'>Loading your assignments…</p>";
    ESApi.post({ action: "list", reg: S.u }).then(function (r) {
      if (!r.ok) throw new Error(r.error || "error");
      var l = r.assignments, now = new Date(r.now).getTime();
      if (!l.length) { main.innerHTML = "<div class='as-msg'>No assignments right now. 🎉</div>"; return; }
      var h = "<p class='lead'>Attempt each assignment once. Each question carries 1 mark. You cannot retake after submitting.</p><div class='cards'>";
      l.forEach(function (a) {
        var late = a.due && now > new Date(a.due).getTime();
        var badge, cls = "";
        if (a.done) { badge = "Submitted · " + a.done.score + " / " + a.done.total; cls = " done"; }
        else if (late) { badge = "Closed (due date passed)"; cls = " late"; }
        else badge = (localStorage.getItem("asg:" + S.u + ":" + a.id) ? "Continue" : "Start");
        var open = !a.done && !late;
        h += "<a class='card" + cls + "' href='" + (open || a.done ? "attempt.html?a=" + encodeURIComponent(a.id) : "#") + "'><h2>" + esc(a.title) + "</h2><p>" + a.n + " questions · " + a.n + " marks" + (a.topics ? " · " + esc(a.topics) : "") + (a.due ? "<br>Due: " + ASM.fmtDate(a.due) : "") + "</p><span class='badge'>" + esc(badge) + "</span></a>";
        try { localStorage.setItem("asgmeta:" + a.id, JSON.stringify(a)); } catch (e) {}
      });
      main.innerHTML = h + "</div>";
    }).catch(function () {
      main.innerHTML = "<div class='as-msg'>Could not reach the server. Check your internet and <a href='#' id='rt'>try again</a>.</div>";
      document.getElementById("rt").onclick = function (e) { e.preventDefault(); load(); };
    });
  }
  load();
})();
