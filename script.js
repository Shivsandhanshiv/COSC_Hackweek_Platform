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
  {
    name: "Rohit Sharma",
    role: "Batsman",
    image: "assets/rohit.jpg",
    jersey: 45,
    matches: 250,
    strikeRate: "135.4",
    performance: "118(43) vs AUS"
  },
  {
    name: "Hardik Pandya",
    role: "Bowler",
    image: "assets/hardik.jpg",
    jersey: 33,
    matches: 100,
    strikeRate: "150.1",
    performance: "3/22 & 40*(25) vs ENG"
  },
  {
    name: "KL Rahul",
    role: "Batsman",
    image: "assets/rahul.jpg",
    jersey: 1,
    matches: 95,
    strikeRate: "145.3",
    performance: "110*(49) vs WI"
  },
  {
    name: "Yuzvendra Chahal",
    role: "Bowler",
    image: "assets/chahal.jpg",
    jersey: 6,
    matches: 78,
    strikeRate: "65.8",
    performance: "6/25 vs SA"
  }
];

const grid = document.getElementById("playerGrid");
const modal = document.getElementById("playerModal");

function renderPlayers(filter = "All") {
  grid.innerHTML = "";
  players.forEach((p, i) => {
    if (filter === "All" || p.role === filter) {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.role}</p>
      `;
      card.onclick = () => openModal(i);
      grid.appendChild(card);
    }
  });
}

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

function filterPlayers(role) {
  renderPlayers(role);
}

// Initial render
renderPlayers();
