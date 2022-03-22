// FORMULAIRE DE CONTACTE

const form = document.querySelector("form");
const show = document.querySelector("div");
const hide = document.querySelector("span");
const name = document.querySelector("#name");
const mail = document.querySelector("#mail");
const msg = document.querySelector("#msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (this.name.value == "") {
    alert("Ce nom n'est pas valide.");
  } else if (this.msg.value == "") {
    alert("Il n'y a aucun message.");
  } else if (this.mail.value == "") {
    alert("Cet email n'est pas valide.");
  } else {
    show.classList.add("show");
  }
});

hide.addEventListener("click", function (event) {
  event.preventDefault();
  show.classList.remove("show");
});
