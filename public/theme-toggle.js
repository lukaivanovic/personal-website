(function () {
  "use strict";

  // Check if View Transitions API is supported
  if (!document.startViewTransition) {
    // Fallback: add polyfill or use regular DOM manipulation
    console.warn("View Transitions API not supported");
  }

  function setTheme(theme) {
    const htmlElement = document.documentElement;

    // Use View Transitions API if available
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        if (theme === "light") {
          htmlElement.removeAttribute("data-theme");
        } else {
          htmlElement.setAttribute("data-theme", theme);
        }
      });
    } else {
      // Fallback without transitions
      if (theme === "light") {
        htmlElement.removeAttribute("data-theme");
      } else {
        htmlElement.setAttribute("data-theme", theme);
      }
    }
  }

  // Wait for DOM to be ready
  function init() {
    const themeSelect = document.getElementById("theme-toggle");

    if (themeSelect) {
      // Set initial value based on current theme
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      themeSelect.value = currentTheme;

      // Handle theme change
      themeSelect.addEventListener("change", (e) => {
        setTheme(e.target.value);
      });
    } else {
      console.warn('Element with id "theme-toggle" not found');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
