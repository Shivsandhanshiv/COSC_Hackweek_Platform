const startBtn = document.getElementById("startBtn");
const transcript = document.getElementById("transcript");

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  transcript.value = "Connecting to Deepgram...\n";

  // Simulate connection delay
  setTimeout(() => {
    transcript.value += "🟢 Connected! Listening...\n";

    // Simulated words (you can change these)
    const fakeWords = [
      "Hello", "this", "is", "a", "live", "speech-to-text", "demo", 
      "using", "Deepgram", "API", "interface", "simulated", "in", "JavaScript"
    ];
    
    let i = 0;

    // Simulate typing each word with delay
    const interval = setInterval(() => {
      if (i < fakeWords.length) {
        transcript.value += fakeWords[i++] + " ";
      } else {
        clearInterval(interval);
        transcript.value += "\n🔴 Demo complete. You can click Start again.";
        startBtn.disabled = false;
      }
    }, 500);

  }, 1500);
});
