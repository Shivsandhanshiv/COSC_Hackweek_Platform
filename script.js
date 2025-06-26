const players = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    image: "assets/vir.jpg",
    jersey: 18,
    matches: 254,
    strikeRate: "138.2",
    performance: "100*(52) vs SL"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    image: "assets/jas.jpg",
    jersey: 93,
    matches: 140,
    strikeRate: "78.5",
    performance: "5/7 vs WI"
  },
  ];

const grid = document.getElementById("playerGrid");
const modal = document.getElementById("playerModal");

players.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.role}</p>
  `;
  card.onclick = () => openModal(index);
  grid.appendChild(card);
});

function openModal(i) {
  const p = players[i];
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalJersey").textContent = p.jersey;
  document.getElementById("modalMatches").textContent = p.matches;
  document.getElementById("modalStrike").textContent = p.strikeRate;
  document.getElementById("modalPerformance").textContent = p.performance;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}
