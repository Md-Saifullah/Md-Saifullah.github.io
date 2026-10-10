// Portfolio — tiny progressive-enhancement script. Site works without JS.
(function () {
  "use strict";

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav (hamburger). Nav still works without JS on desktop widths.
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("primary-nav");
  if (navToggle && navLinks) {
    var setOpen = function (open) {
      navLinks.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    navToggle.addEventListener("click", function () {
      setOpen(!navLinks.classList.contains("open"));
    });
    // Close after choosing a destination.
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Theme toggle (persisted). Initial theme is applied inline in <head>.
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "light" ? "#fbfcfd" : "#0b0f14");
    });
  }
})();
