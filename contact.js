const message =
  "Votre message a bien été envoyé";

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}