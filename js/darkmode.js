function setDarkMode() {
  const element = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const checkbox = document.querySelector('input[type="checkbox"]');

  if (isDarkMode) {
    element.classList.add("dark-mode");
    checkbox.checked = true;
  } else {
    element.classList.remove("dark-mode");
    checkbox.checked = false;
  }
}

setDarkMode();

function toggleDarkMode() {
  let mode = localStorage.getItem("darkMode") === "true" ? "false" : "true";
  localStorage.setItem("darkMode", mode);
  setDarkMode();
}
