#  Hackweek Countdown Crisis – COSC

This is a **Next.js** web application that displays live event details for **Hackweek COSC**, including a dynamic countdown timer showing how much time is left until the event ends.

## Fixes & Improvements

> The original project had several critical issues. Here’s what was fixed:

###  Fixed Issues
1. **Missing CSS Module File**
   - `Home.module.css` was referenced but did not exist. → Created correctly.
   
2. **Invalid Global Selectors in CSS Module**
   - Used `h1 {}` globally inside `Home.module.css`, which is not allowed in CSS Modules. → Replaced with scoped `.title` class.

3. **Broken Countdown Logic**
   - Ensured countdown updates every second and stops when the event ends.

4. **Improved UI Styling**
   - Added styles for container, headings, and timer for better presentation.

## Project Structure
hackweekcountdown/
├── data/
│ └── cosc.json // COSC event details
├── pages/
│ └── index.js // Main app page
├── styles/
│ └── Home.module.css // Scoped component styling
├── public/
├── package.json
└── README.md

## How to Run Locally
npm install
npm run dev
Open browser and go to http://localhost:3000