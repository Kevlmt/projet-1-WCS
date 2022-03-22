const burger = document.querySelector("#nav");
const btn = document.querySelector('.btn-nav')

if (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      burger.classList.toggle("isOpen")
    });
  }

  
  