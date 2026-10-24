(function () {
  var list = document.getElementById("list");
  (window.MANIFEST || []).forEach(function (p) {
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
