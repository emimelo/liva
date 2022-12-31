export function createCards(cards) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  cards.forEach((elem) => {
    if (elem.id === 1) {
      createFirstCard(elem);
    } else {
      const card = document.createElement("div");
      card.className = "card";

      const caption = document.createElement("div");
      caption.className = "carousel-caption";

      const title = document.createElement("h3");
      title.innerText = elem.title;

      const picture = document.createElement("picture");
      const source = document.createElement("source");
      source.srcset = `${elem.src} 1x, ${elem.src2x} 2x`;
      source.media = "(min-width: 768px)";

      const image = document.createElement("img");
      image.className = "image-card";
      image.src = elem.src2x;
      image.loading = "lazy";
      image.alt = `Image ${elem.title}`;

      picture.append(source, image);

      caption.append(title);

      card.append(caption, picture);

      content.appendChild(card);
    }
  });
}

export function createFirstCard(card) {
  const content = document.querySelector("#content");

  const divCard = document.createElement("div");
  divCard.className = "card-1";

  const caption = document.createElement("div");
  caption.className = "carousel-caption";

  const span = document.createElement("span");
  span.innerText = "PRÉ-LANÇAMENTO";

  const title = document.createElement("h3");
  title.innerText = card.title;

  const cardInfos = document.createElement("div");
  cardInfos.className = "card-infos";

  const infosPlace = document.createElement("div");
  infosPlace.className = "infos-place";

  const divCity = document.createElement("div");
  divCity.className = "city";

  const city = document.createElement("h5");
  city.innerText = "Cidade";

  const titleCity = document.createElement("p");
  titleCity.innerText = card.city;

  const divDistrict = document.createElement("div");
  divDistrict.className = "district";

  const district = document.createElement("h5");
  district.innerText = "Bairro";

  const titleDistrict = document.createElement("p");
  titleDistrict.innerText = card.neighborhood;

  const infosType = document.createElement("div");
  infosType.className = "infos-type";

  const bedroom = document.createElement("div");
  bedroom.className = "bedroom";

  const iconBedroom = document.createElement("img");
  iconBedroom.src = "src/assets/icons/bedroom.svg";
  iconBedroom.alt = "Icon bedroom";

  const resumeBedroom = document.createElement("p");
  resumeBedroom.innerText = "Apartamento com 3 dormitórios sendo 1 suite";

  const type = document.createElement("div");
  type.className = "type";

  const iconVideo = document.createElement("img");
  iconVideo.src = "src/assets/icons/video-security.svg";
  iconVideo.alt = "Icon video security";

  const resumeVideo = document.createElement("p");
  resumeVideo.innerText = "Condomínio Fechado";

  const picture = document.createElement("picture");
  const source = document.createElement("source");
  source.srcset = `${card.src} 1x, ${card.src2x} 2x`;
  source.media = "(min-width: 768px)";

  const image = document.createElement("img");
  image.className = "image-card";
  image.src = card.src2x;
  image.loading = "lazy";
  image.alt = `Image ${card.title}`;

  picture.append(source, image);

  type.append(iconVideo, resumeVideo);
  bedroom.append(iconBedroom, resumeBedroom);
  infosType.append(type, bedroom);

  divDistrict.append(district, titleDistrict);
  divCity.append(city, titleCity);
  infosPlace.append(divCity, divDistrict);

  cardInfos.append(infosPlace, infosType);

  caption.append(span, title, cardInfos);

  divCard.append(caption, picture);

  content.appendChild(divCard);

  return content;
}
