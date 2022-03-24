const cards = document.querySelector(".cards");

const personnage = [
  {
    name: "Shikamaru Nara",
    picture: "assets/Shikamaru.png",
    text: "Membre du clan Nara et actuel conseillé du Hokage, Shikamaru est considéré comme l'une des personnes les plus inteligentes au monde, ce qui lui a valu d'etre promu chunin avant tous les autres ninja de sa génération. ",
  },
  {
    name: "Kakashi Hatake",
    picture: "assets/Kakashi.png",
    text: "Kakashi est un ancien jônin du village caché de Konoha. En tant que chef de l’Équipe 7, il est le mentor Naruto, Sasuke et Sakura. Il est mondialement connu pour son utilisation du Sharingan, sous le surnom du « Ninja Copieur ». Suite à la Quatrième Grande Guerre Shinobi, il devint le Sixième Hokage",
  },
  {
    name: "Tsunade",
    picture: "assets/Tsunade.png",
    text: "Tsunade est l'une des légendaires Sannin de Konoha. Considérée dans le monde comme la plus forte des kunoichi et la plus grande ninja médecin, la mort répétée des êtres lui étant les plus chers firent que Tsunade abandonna la vie de shinobi pendant plusieurs années. Elle fut finalement persuadée de retourner à Konoha et devint le Cinquième Hokage",
  },
  {
    name: "Shizune",
    picture: "assets/Shizune.png",
    text: "Shizune est une jônin de Konoha (plus haut rang de ninja). Apprentie de la légendaire Tsunade, Shizune devint une talentueuse ninja médecin sous sa tutelle, l'accompagnant pendant leur voyage sabbatique loin de leur devoir de shinobi. Après que Tsunade fut persuadée de retourner à Konoha pour devenir le Cinquième Hokage, Shizune assure le rôle de son assistante ainsi que celle de Kakashi.",
  },
  {
    name: "Yamato",
    picture: "assets/Yamato.png",
    text: "Yamato est un membre des forces spéciales de Konoha. En raison de sa maîtrise unique du Mokuton (maitrise du bois), il fut assigné provisoirement à l'Équipe 7, en remplacement de Kakashi Hatake afin d'aider à garder le Démon-Renard à Neuf Queues enfermé en Naruto sous contrôle. Bien que Kakashi revint finalement dans l'équipe, Yamato reste à disposition pour fournir son aide en cas de besoin.",
  },
  {
    name: "Sasuke Uchiwa",
    picture: "assets/Sasuke.png",
    text: "Sasuke etait l'un des membres de l'equipe 7. Il decida de deserter le village afin d'assouvir sa quete de vengeance et devint donc un ennemi du village de konoha. Mais il revint sur le droit chemin en devenant un des hero de la grande guerre. Il continue a aider Naruto dans l'ombre et est considéré comme son plus grand rival.",
  },
  {
    name: "Sakura Haruno",
    picture: "assets/Sakura.png",
    text: "Membre de l'équipe 7, elle est le disiple de Tsunade, l'un des trois ninja légendaire. Pendant la 4ème grande guerre elle a été un des éléments majeur de cet évènement, notamment en sauvant Naruto de la mort à plusieurs reprise. Elle est l'un des meilleurs ninja médecin du village",
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
  cardText.classList.add("card-p");

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
