const btn = document.querySelector("#btn");
const openCard = document.querySelector("#openCard");
var verificadorBtn = false;
var verificadorImg = false;

btn.addEventListener("click", () => {
  openCard.classList.toggle("openCard-activate");

  verificadorBtn = true;

  if (verificadorBtn && verificadorImg) {
    openCard.classList.toggle("openCard-activate");
    img.classList.toggle("img-act");
    verificadorBtn = false;
    verificadorImg = false;
    return;
  }
});

const img = document.querySelector("img");

img.addEventListener("click", () => {
  // alert("feliz cumple mamahuevo xd, 1hora en seminario para hacer esto xd");

  if (verificadorBtn && verificadorImg) {
    openCard.classList.toggle("openCard-activate");
    img.classList.toggle("img-act");
    verificadorBtn = false;
    verificadorImg = false;
    return;
  }
  if (!verificadorImg) {
    img.classList.toggle("img-act");
    verificadorImg = true;
  }
});
