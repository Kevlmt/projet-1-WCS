const cards = document.querySelector(".cards");

const personnage = [
  {
    name: "Monument Hokage",
    picture: "assets/Monument_Hokage.png",
    text: "This just an example"
  },
  {
    name: "Ramen Ichiraku",
    picture: "assets/Ramen_Ichiraku.png",
    text: "This just an example"
  },
  {
    name: "Sources chaudes",
    picture: "assets/Sources_chaudes_de_Konoha.png",
    text: "This just an example"
  },
  {
    name: "Academie",
    picture: "assets/La_nouvelle_Academie.png",
    text: "This just an example"
  },
  {
    name: "Hôpital",
    picture: "assets/Hôpital_de_Konoha.png",
    text: "This just an example"
  },
  {
    name: "Cimetiere",
    picture: "assets/Cimetiere.png",
    text: "anis grand fan"
  },
  {
    name: "Mémorial",
    picture: "assets/Mémorial_Konoha.jpg",
    text: "anis grand fan"
  }
];

function createCard(title, imageUrl, text) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");      /*l'image*/
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardText = document.createElement("p")    /*text dans l'image (text)*/
  cardText.innerHTML = text;
  cardImg.appendChild(cardText)

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");   /*titre (name)*/
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);
}
for (let i = 0; i < personnage.length; i++) {
  createCard(personnage[i].name, personnage[i].picture, personnage[i].text);
}