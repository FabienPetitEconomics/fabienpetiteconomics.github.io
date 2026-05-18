(function () {
  function toggleAbstract(button) {
    var targetId = button.getAttribute("data-target");
    if (!targetId) {
      return;
    }

    var panel = document.getElementById(targetId);
    if (!panel) {
      return;
    }

    var expanded = button.getAttribute("aria-expanded") === "true";
    var nextState = !expanded;

    panel.hidden = !nextState;
    button.setAttribute("aria-expanded", String(nextState));
    button.textContent = nextState ? "Hide Abstract" : "Abstract";
  }

  function initToggles() {
    var buttons = document.querySelectorAll(".toggle[data-target]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        toggleAbstract(button);
      });
    });
  }

  function initAnchorOffset() {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        if (!href || href.length < 2) {
          return;
        }

        var target = document.querySelector(href);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (history.pushState) {
          history.pushState(null, "", href);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initToggles();
    initAnchorOffset();
  });
})();
