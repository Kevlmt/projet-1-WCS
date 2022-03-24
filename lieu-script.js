const cards = document.querySelector(".cards");

const personnage = [
  {
    name: "Monument Hokage",
    picture: "assets/Monument_Hokage.png",
    text: "Le Monument des Hokage est une montagne où les visages de tous les Hokage furent sculptés.",
  },
  {
    name: "Ramen Ichiraku",
    picture: "assets/Ramen_Ichiraku.png",
    text: "Ramen Ichiraku est un restaurant de ramen situé à Konoha. (C'est le restaurant favori de notre cher Hokage Naruto)"
  },
  {
    name: "Sources chaudes",
    picture: "assets/Sources_chaudes_de_Konoha.png",
    text: "Les bains de Konoha font offices de véritables espaces de détente et de regain d’énergie. Jiraya, le Sannin légendaire, aimait beaucoup admirer les filles et prendre des infos pour son roman.",
  },
  {
    name: "Academie",
    picture: "assets/La_nouvelle_Academie.png",
    text: "L'Académie est le centre de formation de Konoha pour les futurs ninjas. Elle fut fondée par Tobirama Senju, le Deuxième Hokage, par besoin militaire. Une fois leur diplôme en poche, les apprentis ninjas peuvent devenir genin.",
  },
  {
    name: "Hôpital",
    picture: "assets/Hôpital_de_Konoha.png",
    text: "Un lieu qui accueille les ninjas blessés mais aussi les simples villageois. Le talent des médecins, et particulièrement des ninjas médecins qui composent cette institution, font de cet hôpital l'un des meilleurs du monde.",
  },
  {
    name: "Cimetiere",
    picture: "assets/Cimetiere.png",
    text: "Le cimetière de Konoha est le lieu où sont enterrés les Hokage et les ninjas morts au combat. Les Hokage sont enterrés dans de plus grosses tombes que les autres. Pour faire honneur aux ninjas décédés, leurs noms sont gravés sur un monument.",
  },
  {
    name: "Mémorial",
    picture: "assets/Mémorial_Konoha.jpg",
    text: "Le mémorial de Konoha est un monument où sont gravés la liste des noms des ninjas qui se sont sacrifiés pour le village. Dans le manga, il a l'apparence d'une pierre tombale normale, alors que dans l'anime il a plutôt la forme d'un kunaï.",
  },
];

function createCard(title, imageUrl, text) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div"); /*l'image*/
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardText = document.createElement("p"); /*text dans l'image (text)*/
  cardText.innerHTML = text;
  cardImg.appendChild(cardText);
  cardText.classList.add("card-p")

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2"); /*titre (name)*/
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);
}
for (let i = 0; i < personnage.length; i++) {
  createCard(personnage[i].name, personnage[i].picture, personnage[i].text);
}




