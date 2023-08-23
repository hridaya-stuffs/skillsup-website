function selectLevel(level) {
  const levelContents = document.querySelectorAll(".level-content");
  levelContents.forEach((content) => {
    if (content === level) {
      content.classList.add("selected");
    } else {
      content.classList.remove("selected");
    }
  });
}
