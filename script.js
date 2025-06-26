const startBtn = document.getElementById('start-record-btn');
const status = document.getElementById('status');
const taskList = document.getElementById('task-list');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;

startBtn.addEventListener('click', () => {
  recognition.start();
  status.textContent = 'Listening...';
});

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  addTask(transcript);
  status.textContent = 'Task added: "' + transcript + '"';
};

recognition.onerror = function(event) {
  status.textContent = 'Error occurred: ' + event.error;
};

function addTask(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button onclick="markDone(this)">✔️</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;
  taskList.appendChild(li);
}

function markDone(btn) {
  const li = btn.closest('li');
  li.classList.toggle('completed');
}

function deleteTask(btn) {
  const li = btn.closest('li');
  taskList.removeChild(li);
}
