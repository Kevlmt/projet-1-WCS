// THEME CLAIR / SOMBRE

const button = document.querySelector("#btn-toggle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const barre = document.querySelectorAll(".barre");
const ul = document.querySelectorAll("a");

const currentTheme = localStorage.getItem("theme");
const currentButton = localStorage.getItem("buttonTheme");
const currentHeader = localStorage.getItem("headerTheme");
const currentNav = localStorage.getItem("navTheme");
const currentBarre = localStorage.getItem("barreTheme");
const currentUl = localStorage.getItem("ulTheme");

if (currentTheme == "light") {
  body.classList.add("light");
  button.classList.add("dark");
  header.classList.add("light");
  nav.classList.add("light");
  barre[0].classList.add("dark");
  barre[1].classList.add("dark");
  barre[2].classList.add("dark");
  ul[0].classList.add("light");
  ul[1].classList.add("light");
  ul[2].classList.add("light");
  ul[3].classList.add("light");
}

button.addEventListener("click", function () {
  body.classList.toggle("light");
  button.classList.toggle("dark");
  header.classList.toggle("light");
  nav.classList.toggle("light");
  barre[0].classList.toggle("dark");
  barre[1].classList.toggle("dark");
  barre[2].classList.toggle("dark");
  ul[0].classList.toggle("light");
  ul[1].classList.toggle("light");
  ul[2].classList.toggle("light");
  ul[3].classList.toggle("light");

  let theme = "dark";
  let buttonTheme = "light";
  let headerTheme = "light";
  let navTheme = "light";
  let barreTheme = "dark";
  let ulTheme = "light";

  if (body.classList.contains("light")) {
    theme = "light";
    buttonTheme = "dark";
    hearderTheme = "light";
    navTheme = "light";
    barreTheme = "light";
    ulTheme = "light";
  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("buttonTheme", buttonTheme);
  localStorage.setItem("headerTheme", headerTheme);
  localStorage.setItem("navTheme", navTheme);
  localStorage.setItem("barreTheme", barreTheme);
  localStorage.setItem("ulTheme", ulTheme);
});
