const container = document.getElementById("dogContainer");
const loadBtn = document.getElementById("loadBtn");
const breedFilter = document.getElementById("breedFilter");

let allDogs = [];

async function fetchDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();
  allDogs = data.message.map(url => ({
    url,
    breed: url.split("/")[4]
  }));
  displayDogs(allDogs.slice(0, 5));
}

function displayDogs(dogs) {
  container.innerHTML = "";
  dogs.forEach(dog => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${dog.url}" alt="${dog.breed}"><p>${dog.breed}</p>`;
    container.appendChild(div);
  });
}

breedFilter.addEventListener("input", () => {
  const value = breedFilter.value.toLowerCase();
  const filtered = allDogs.filter(dog => dog.breed.includes(value));
  displayDogs(filtered.slice(0, 5));
});

loadBtn.addEventListener("click", fetchDogs);

fetchDogs();
