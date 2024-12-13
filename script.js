const topCreator = document.querySelector(".top-creators");

const creators = [
  {
    img: "./assets/creator-1.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },

  {
    img: "./assets/creator-2.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },

  {
    img: "./assets/creator-3.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-4.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-5.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-6.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-7.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-8.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-9.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-10.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-11.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
  {
    img: "./assets/creator-12.png",
    name: "BlueWhale",
    sales: "34.53 ETH",
  },
];

creators.forEach((creator,index) => {
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
