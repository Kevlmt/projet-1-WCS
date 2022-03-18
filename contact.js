/* alert submit */
const form = document.querySelector("form");
const show = document.querySelector("div");
const hide = document.querySelector("span");


if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    show.classList.add("show")
  });
}

if (hide) {
  hide.addEventListener("click", function (event) {
    event.preventDefault();
    show.classList.remove("show")
  })
}


/* theme dark/light*/
const button = document.querySelector(".btn-toggle")
const body = document.querySelector("body")

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "light") {
  body.classList.add("light");
}

button.addEventListener("click", function () {
  body.classList.toggle("light");

  let theme = "dark";
  if (body.classList.contains("light")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
})