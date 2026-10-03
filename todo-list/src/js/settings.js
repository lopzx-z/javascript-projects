const div = document.getElementById("div");

div.innerHTML = `
<button id="dark">Dark</button>
`;

div.addEventListener("click", (event) => {
  localStorage.setItem("theme", event.target.id);
});

let theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "white");
}

if (theme == "white") {
  div.innerHTML = `
    <button id="dark"">Dark</button>
    `;

  const dark = document.getElementById("dark");

  dark.addEventListener("click", () => {
    location.reload();
  });
} else {
  div.innerHTML = `
    <button id="white"">White</button>
    `;

  const white = document.getElementById("white");

  white.addEventListener("click", () => {
    location.reload();
  });
}
