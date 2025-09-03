const products = [
  {
    name: "Now Foods Brain Elevate",
    price: "$20",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/now-foods.png",
    tag: "sale"
  },
  {
    name: "Neurobion Forte 30tabs - Suplemen",
    price: "$45",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/neurobion.png",
    tag: "sale"
  },
  {
    name: "Horbach Neuro Support Complex",
    price: "$52",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/harbaach.png",
    tag: "sale"
  },
  {
    name: "Nature's Bounty, Mental Fatigue & Stress Relief",
    price: "$38",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/nature-bounty.png",
    tag: "15% off"
  },
  {
    name: "Swanson St. John's Wort Full Spectrum",
    price: "$78",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/swanson.png",
    tag: "15% off"
  },
  {
    name: "Blackmores Omega Brain High DHA 60",
    price: "$150",
    rating: 4.2,
    image: "../image/SoulCastStore-Main/blackmores.png",
    tag: "15% off"
  }
]

const productGrid = document.getElementById("productGrid")

products.forEach(prod => {
  const card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `
    <div class="tag ${prod.tag === "new" ? "new" : ""}">${prod.tag.toUpperCase()}</div>
    <img src="${prod.image}" alt="${prod.name}" />
    <div class="card-content">
      <div>${prod.name}</div>
      <div class="price-rating">
        <div class="price">${prod.price}</div>
        <div class="rating">${prod.rating}</div>
      </div>
    </div>
  `
  productGrid.appendChild(card)
})

document.querySelector('#back-button').addEventListener("click", () => {
  window.location.href = "../MainPage/mainpage.html"
})

document.querySelector('.product-grid').addEventListener("click", () => {
  window.location.href = "../SoulcastStoreProductDetails/index.html"
})