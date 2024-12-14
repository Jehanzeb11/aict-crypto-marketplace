const topCreator = document.querySelector(".top-creators");
const catData = document.querySelector(".cat-data");

const creators = [
  {
    img: "./assets/creator-1.png",
    name: "Keepitreal",
    sales: "34.53 ETH",
  },

  {
    img: "./assets/creator-2.png",
    name: "DigiLab",
    sales: "34.53 ETH",
  },

  {
    img: "./assets/creator-3.png",
    name: "GravityOne",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-4.png",
    name: "Juanie",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-5.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-6.png",
    name: "mr fox",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-7.png",
    name: "Shroomie",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-8.png",
    name: "robotica",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-9.png",
    name: "RustyRobot",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-10.png",
    name: "animakid",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-11.png",
    name: "Dotgu",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-12.png",
    name: "Ghiblier",
    sales: "34.53 ETH",
  },
];

const categoryData = [
  {
    image: "./assets/category-1.png",
    name: "Art"
  },
  {
    image: "./assets/category-2.png",
    name: "Collectibles"
  },
  {
    image: "./assets/categor-3.png",
    name: "Music"
  },
  {
    image: "./assets/categor-4.png",
    name: "Photography"
  },
  {
    image: "./assets/categor-5.png",
    name: "Video"
  },
  {
    image: "./assets/categor-6.png",
    name: "Utility"
  },
  {
    image: "./assets/categor-7.png",
    name: "Sport"
  },
  {
    image: "./assets/categor-8.png",
    name: "Virtual Worlds"
  },
]

creators.forEach((creator, index) => {
  const creatorDiv = document.createElement("div");
  creatorDiv.classList.add("creator");
  creatorDiv.innerHTML = `
  <p class="rank">${index + 1}</p>
  <img src="${creator.img}" alt="">
  <div class="info">
    <h4>${creator.name}</h4>
    <p><span>Total Sales:</span> ${creator.sales}</p>
  </div>
  `;
  topCreator.appendChild(creatorDiv);
});


categoryData.forEach((data, index) => {
  const creatorDiv = document.createElement("div");
  creatorDiv.classList.add("cat");
  creatorDiv.innerHTML = `
<img src=${data.image} alt="category-1.png">
<div class="about">
  <h4>${data.name}</h4>
</div>
  `;
  catData.appendChild(creatorDiv);
});
