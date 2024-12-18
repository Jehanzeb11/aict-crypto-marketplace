const topCreator = document.querySelector(".top-creators");
const catData = document.querySelector(".cat-data");
const artists = document.querySelector(".artists");
const market = document.querySelector(".market");
const morenfts = document.querySelector(".more-nfts");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

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
  },
  {
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

const marketData = [
  {
    image: "./assets/mart-1.png",
    avatar: "./assets/avatar-1.png",
    name: "Magic Mushroom 0325",
    about: "Shroomie",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-2.png",
    name: "Happy Robot 032",
    avatar: "./assets/avatar-2.png",
    about: "BeKind2Robots",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-3.png",
    avatar: "./assets/avatar-3.png",
    name: "Happy Robot 024",
    about: "BeKind2Robots",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },

  {
    image: "./assets/mart-4.png",
    avatar: "./assets/avatar-4.png",
    name: "Designer Bear",
    about: "Mr Fox",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },

  {
    image: "./assets/mart-5.png",
    avatar: "./assets/avatar-5.png",
    name: "Colorful Dog 0356",
    about: "Keepitreal",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-6.png",
    avatar: "./assets/avatar-6.png",
    name: "Dancing Robot 0312",
    about: "Robotica",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-7.png",
    avatar: "./assets/avatar-7.png",
    name: "Cherry Blossom Girl 035",
    about: "MoonDancer",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-8.png",
    avatar: "./assets/avatar-8.png",
    name: "Space Travel",
    about: "NebulaKid",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },

  {
    image: "./assets/mart-9.png",
    avatar: "./assets/avatar-9.png",
    name: "Sunset Dimension",
    about: "Animakid",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-10.png",
    avatar: "./assets/avatar-10.png",
    name: "Desert Walk",
    about: "Catch 22",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-11.png",
    avatar: "./assets/avatar-5.png",
    name: "IceCream Ape 0324",
    about: "Ice Ape Club",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
  {
    image: "./assets/mart-12.png",
    avatar: "./assets/avatar-4.png",
    name: "Colorful Dog 0344",
    about: "PuppyPower",
    price: "1.63 ETH",
    highestBid: "0.33 ETH",
  },
];

if (topCreator) {
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
}

if (catData) {
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
}

if (artists) {
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
}

if (market) {
  marketData.forEach((data, index) => {
    const creatorDiv = document.createElement("div");
    creatorDiv.addEventListener("click", () => {
      window.location.href = "./nft-detail.html";
    })
    creatorDiv.classList.add("market-content");
    creatorDiv.innerHTML = `    
               <div class="card">
                <img src=${data.image} alt="discover-1">
                <div class="info">
                  <h4>${data.name}</h4>
                  <div class="about">
                    <img src=${data.avatar} alt="discover-avatar-1">
                    <p>${data.about}</p>
                  </div>
                  <div class="price">
                    <div>
                      <p class="priceHeading">Price</p>
                      <p class="priceInfo">${data.price}</p>
                    </div>
      
                    <div>
                      <p class="priceHeading">Highest Bid</p>
                      <p class="priceInfo">${data.highestBid}</p>
                    </div>
                  </div>
                </div>
              </div>
              `;
    market.appendChild(creatorDiv);
  });
}

if (morenfts) {
  marketData.forEach((data, index) => {
    const creatorDiv = document.createElement("div");
    creatorDiv.addEventListener("click", () => {
      window.location.href = "./nft-detail.html";
    })
    creatorDiv.classList.add("content");
    creatorDiv.innerHTML = `    
               <div class="card">
                <img src=${data.image} alt="discover-1">
                <div class="info">
                  <h4>${data.name}</h4>
                  <div class="about">
                    <img src=${data.avatar} alt="discover-avatar-1">
                    <p>${data.about}</p>
                  </div>
                  <div class="price">
                    <div>
                      <p class="priceHeading">Price</p>
                      <p class="priceInfo">${data.price}</p>
                    </div>
      
                    <div>
                      <p class="priceHeading">Highest Bid</p>
                      <p class="priceInfo">${data.highestBid}</p>
                    </div>
                  </div>
                </div>
              </div>
              `;
    morenfts.appendChild(creatorDiv);
  });
}

const countdown = () => {
  const launchDate = new Date("2025-01-30").getTime();
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  days.innerHTML = textDay;
  hours.innerHTML = textHour;
  minutes.innerHTML = textMinute;
  seconds.innerHTML = textSecond;
};

if (days && hours && minutes && seconds) {
  setInterval(countdown, 1000);
}