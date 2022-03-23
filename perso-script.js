const cards = document.querySelector(".cards");

const personnage = [
  {
    name: "Shikamaru Nara",
    picture: "assets/Shikamaru.png",
    text: "This just an example"
  },
  {
    name: "Kakashi Hatake",
    picture: "assets/Kakashi.png",
    text: "This just an example"
  },
  {
    name: "Tsunade",
    picture: "assets/Tsunade.png",
    text: "This just an example"
  },
  {
    name: "Shizune",
    picture: "assets/Shizune.png",
    text: "This just an example"
  },
  {
    name: "Yamato",
    picture: "assets/Yamato.png",
    text: "This just an example"
  },
  {
    name: "Sasuke Uchiwa",
    picture: "assets/Sasuke.png",
    text: "anis grand fan"
  },
  {
    name: "Sakura Haruno",
    picture: "assets/Sakura.png",
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