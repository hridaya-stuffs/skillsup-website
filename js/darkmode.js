function setDarkMode() {
  var element = document.body;
  if (localStorage.getItem("darkMode") === "true") {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

setDarkMode();

function toggleDarkMode() {
  mode = localStorage.getItem("darkMode") === "true" ? "false" : "true";
  localStorage.setItem("darkMode", mode);
  setDarkMode();
}
