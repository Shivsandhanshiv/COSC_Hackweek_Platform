const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const DATA_FILE = path.join(__dirname, 'journalData.json');

function generateSummaryAndMood(text) {
    const summary = text.length > 100 ? text.slice(0, 100) + '...' : text;
    const mood = /happy|joy|great|good/.test(text.toLowerCase()) ? '😊 Happy' :
                 /sad|bad|angry|tired/.test(text.toLowerCase()) ? '😞 Sad' : '😐 Neutral';
    return { summary, mood };
}

app.get('/api/entries', (req, res) => {
    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        res.json(JSON.parse(data));
    } else {
        res.json([]);
    }
});

app.post('/api/entries', (req, res) => {
    const { text } = req.body;
    const { summary, mood } = generateSummaryAndMood(text);
    const newEntry = { text, summary, mood, date: new Date().toISOString() };

    let entries = [];
    if (fs.existsSync(DATA_FILE)) {
        entries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    entries.unshift(newEntry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
    res.json(newEntry);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
