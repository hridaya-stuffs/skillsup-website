function setDarkMode() {
  const element = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  
  if (isDarkMode) {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

setDarkMode();

function toggleDarkMode() {
  let mode = localStorage.getItem("darkMode") === "true" ? "false" : "true";
  localStorage.setItem("darkMode", mode);
  setDarkMode();
}
