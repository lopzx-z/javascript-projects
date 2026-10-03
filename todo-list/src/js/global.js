theme = localStorage.getItem("theme");

if (theme == "white") {
  document.documentElement.style.setProperty("--first-color", "white");
  document.documentElement.style.setProperty("--secound-color", "black");
} else {
  document.documentElement.style.setProperty("--first-color", "black");
  document.documentElement.style.setProperty("--secound-color", "white");
}
