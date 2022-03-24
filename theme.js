// THEME CLAIR / SOMBRE

const button = document.querySelector("#btn-toggle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const barre = document.querySelectorAll(".barre");
const ul = document.querySelectorAll("a");
const cardP = document.querySelectorAll(".card-p");

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
  for (let i = 0; i < barre.length; i++) {
    barre[i].classList.add("dark");
  }
  for (let i = 0; i < ul.length; i++) {
    ul[i].classList.add("light");
  }
}

button.addEventListener("click", function () {
  body.classList.toggle("light");
  button.classList.toggle("dark");
  header.classList.toggle("light");
  nav.classList.toggle("light");
  for (let i = 0; i < barre.length; i++) {
    barre[i].classList.toggle("dark");
  }
  for (let i = 0; i < ul.length; i++) {
    ul[i].classList.toggle("light");
  }

  let theme = "dark";
  let buttonTheme = "light";
  let headerTheme = "light";
  let navTheme = "light";
  let barreTheme = "dark";
  let ulTheme = "light";
  let cardPTheme = "light";

  if (body.classList.contains("light")) {
    theme = "light";
    buttonTheme = "dark";
    hearderTheme = "light";
    navTheme = "light";
    barreTheme = "light";
    ulTheme = "light";
    cardPTheme = "light";
  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("buttonTheme", buttonTheme);
  localStorage.setItem("headerTheme", headerTheme);
  localStorage.setItem("navTheme", navTheme);
  localStorage.setItem("barreTheme", barreTheme);
  localStorage.setItem("ulTheme", ulTheme);
  localStorage.setItem("cardPTheme", cardPTheme);
});
