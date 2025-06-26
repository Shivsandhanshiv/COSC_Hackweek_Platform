const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let submissions = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/submit', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  submissions.push({ fullName, email, phone, course });

  res.send(`
    <h2>Thank you, ${fullName}!</h2>
    <p>You’ve successfully applied for the <strong>${course}</strong> program.</p>
    <a href="/admission">Go back to form</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/admission`);
});
