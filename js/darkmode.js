function setDarkMode(darkMode) {
  var element = document.body;

  if (darkMode) {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

function toggleDarkMode() {
  var currentDarkMode = localStorage.getItem("darkMode") === "true";
  var newDarkMode = !currentDarkMode;

  localStorage.setItem("darkMode", newDarkMode);
  setDarkMode(newDarkMode);
}

// Initialize dark mode setting from localStorage or set it to false by default
document.addEventListener("DOMContentLoaded", function () {
  var currentDarkMode = localStorage.getItem("darkMode") === "true";
  setDarkMode(currentDarkMode);
});

// Set dark mode to false by default when the tab is closed
window.addEventListener("beforeunload", function () {
  localStorage.setItem("darkMode", false);
});
