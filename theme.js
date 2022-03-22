// THEME CLAIR / SOMBRE

const button = document.querySelector("#btn-toggle");
const body = document.querySelector("body");

const currentTheme = localStorage.getItem("theme");
const currentButton = localStorage.getItem("buttonTheme")

if (currentTheme == "light") {
  body.classList.add("light");
  button.classList.add("dark")
};

button.addEventListener("click", function () {
  body.classList.toggle("light");
  button.classList.toggle("dark")

  let theme = "dark";
  let buttonTheme = "light"
  if (body.classList.contains("light")) {
    theme = "light";
    buttonTheme = "dark";

  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("buttonTheme", buttonTheme)
}); 



