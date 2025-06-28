# BlackboxClone API

A simple FastAPI-based text processing API that supports reversing text, encoding text, and filtering data by keyword.


## Features

- **Reverse Text** – Reverses the given string.
- **Encode Text** – Encodes a string into UTF-8 hex format.
- **Filter Data** – Filters a list of strings based on a keyword.

## Tech Stack

- Python 3.10+
- FastAPI
- Uvicorn 

## Project Structure
blackboxclone/
│
├── main.py # FastAPI app entry point
├── endpoints.py # Helper functions for logic
├── requirements.txt # Python dependencies
└── README.md # Project documentation

##  Setup Instructions
pip install -r requirements.txt
uvicorn main:app --reload

