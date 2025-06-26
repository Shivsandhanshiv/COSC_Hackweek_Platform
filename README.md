# Express Admission Portal

This is a simple admissions portal built using **Node.js** and **Express.js**. The application allows users to submit their admission details via a responsive HTML form. Upon submission, the data is temporarily stored in memory, and a personalized confirmation message is displayed.

## Features

- Responsive HTML form for collecting:
  - Full Name
  - Email Address
  - Phone Number
  - Course Selection (Dropdown)
- Express.js server to handle form submissions
- In-memory data storage (no database used)
- Displays confirmation message like:  
  `"Thank you, [Name]! You’ve successfully applied for the [Course] program."`

## Tech Stack

- Node.js  
- Express.js  
- HTML/CSS  
- body-parser middleware

## Project Structure
expressadmissionportal/
│
├── server.js 
├── package.json 
├── views/
│ └── form.html 
├── public/
│ └── styles.css 
└── README.md 

## How to Run Locally
npm init -y
npm install express body-parser
node server.js
http://localhost:3000/admission

