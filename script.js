const topCreator = document.querySelector(".top-creators");
const catData = document.querySelector(".cat-data");
const artists = document.querySelector(".artists");

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
    name: "Art",
  },
  {
    image: "./assets/category-2.png",
    name: "Collectibles",
  },
  {
    image: "./assets/categor-3.png",
    name: "Music",
  },
  {
    image: "./assets/categor-4.png",
    name: "Photography",
  },
  {
    image: "./assets/categor-5.png",
    name: "Video",
  },
  {
    image: "./assets/categor-6.png",
    name: "Utility",
  },
  {
    image: "./assets/categor-7.png",
    name: "Sport",
  },
  {
    image: "./assets/categor-8.png",
    name: "Virtual Worlds",
  },
];

const artistArray = [
  {
    name: "Jaydon Ekstrom Bothman",
    image: "../assets/avatar-1.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Ruben Carder",
    image: "../assets/avatar-2.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Alfredo Septimus",
    image: "../assets/avatar-3.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Davis Franci",
    image: "../assets/avatar-4.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Livia Rosser",
    image: "../assets/avatar-5.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },{
    name: "Kianna Donin",
    image: "../assets/avatar-6.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Phillip Lipshutz",
    image: "../assets/avatar-7.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Maria Rosser",
    image: "../assets/avatar-8.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Kianna Stanton",
    image: "../assets/avatar-9.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },

  {
    name: "Angel Lubin",
    image: "../assets/avatar-10.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Allison Torff",
    image: "../assets/avatar-11.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
  {
    name: "Davis Workman",
    image: "../assets/avatar-2.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },

  {
    name: "Lindsey Lipshutz",
    image: "../assets/avatar-5.png",
    change: "+1.41%",
    sold: 602,
    sales: "34.53 ETH",
  },
];

artistArray.forEach((data, index) => {
  const creatorDiv = document.createElement("div");
  creatorDiv.classList.add("artist");
  creatorDiv.innerHTML = `    
              <p class="index">${index + 1}</p>
              <div class="artist-info">
                <img src="${data.image}" alt="artist1">
                <p>${data.name}</p>
              </div>
              <p class="change">${data.change}</p>
              <p>${data.sold}</p>
              <p class="volume">${data.sales}</p>
            `;
  artists.appendChild(creatorDiv);
});

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
