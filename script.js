let count = 0;

function updateCounter() {
  document.getElementById('counter').textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}
