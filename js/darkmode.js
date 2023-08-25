// Function to set the dark mode styling
function setDarkMode(darkMode) {
  var element = document.body;

  if (darkMode) {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  var currentDarkMode = localStorage.getItem("darkMode") === "true";
  var newDarkMode = !currentDarkMode;

  localStorage.setItem("darkMode", newDarkMode);
  setDarkMode(newDarkMode);
}

// Apply dark mode setting on page load
document.addEventListener("DOMContentLoaded", function () {
  var currentDarkMode = localStorage.getItem("darkMode") === "true";
  setDarkMode(currentDarkMode);
});
