async function getDefinition() {
  const word = document.getElementById('wordInput').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Loading...';

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    if (data.title === "No Definitions Found") {
      resultDiv.innerHTML = `<p>No definition found for <strong>${word}</strong>.</p>`;
      return;
    }

    const definition = data[0].meanings[0].definitions[0].definition;
    const partOfSpeech = data[0].meanings[0].partOfSpeech;
    const phonetic = data[0].phonetic || "";

    resultDiv.innerHTML = `
      <h2>${word}</h2>
      <p><strong>Phonetic:</strong> ${phonetic}</p>
      <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      <p><strong>Definition:</strong> ${definition}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p>Error fetching definition. Please try again later.</p>`;
  }
}
