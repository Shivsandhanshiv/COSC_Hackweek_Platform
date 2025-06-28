const { DateTime } = luxon;

const cityTimeZones = {
  "New York": "America/New_York",
  "London": "Europe/London",
  "Tokyo": "Asia/Tokyo",
  "Sydney": "Australia/Sydney",
  "Mumbai": "Asia/Kolkata",
  "San Francisco": "America/Los_Angeles",
  "Berlin": "Europe/Berlin"
};

function getAvailability(city) {
  const zone = cityTimeZones[city];
  if (!zone) return [];

  let slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    let dt = DateTime.now().set({ hour, minute: 0 }).setZone(zone);
    slots.push(dt.toUTC().toISO()); // store as UTC
  }
  return slots;
}

function findMeetingTime() {
  const cities = [
    document.getElementById("city1").value.trim(),
    document.getElementById("city2").value.trim(),
    document.getElementById("city3").value.trim()
  ].filter(c => c !== "");

  if (cities.length < 2) {
    alert("Please enter at least two cities.");
    return;
  }

  const availabilityLists = cities.map(getAvailability);
  if (availabilityLists.includes([])) {
    alert("Unknown city entered.");
    return;
  }

  const commonSlots = availabilityLists.reduce((a, b) => a.filter(t => b.includes(t)));

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>Suggested Times</h2>`;

  if (commonSlots.length === 0) {
    resultDiv.innerHTML += "<p>No common time slots found.</p>";
    return;
  }

  const firstSlot = DateTime.fromISO(commonSlots[0]);

  cities.forEach(city => {
    const zone = cityTimeZones[city];
    const localTime = firstSlot.setZone(zone).toFormat("hh:mm a");
    resultDiv.innerHTML += `<p>${city}: ${localTime}</p>`;
  });
}
