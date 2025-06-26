# The Database Forge

## Overview
This project demonstrates how to use **SQLAlchemy (an Object Relational Mapper)** in Python to:

- Create a **SQLite3 database**
- Define and create two tables: `Category` and `Product`
- Populate the tables with sample data
- Retrieve and display the data using a Python script

## Project Structure

database_forge/
├── main.py 
├── forge.db 
└── README.md 

## Requirements

- Python 3.x
- SQLAlchemy

## Installation

Install the required library:
pip install sqlalchemy
python main.py
output:
Product List:
--------------------------------------------------
Product: Smartphone, Price: $699.99, Category: Electronics
Product: Laptop, Price: $1199.49, Category: Electronics
Product: Python Programming, Price: $39.99, Category: Books
Product: T-Shirt, Price: $19.99, Category: Clothing
Product: Jeans, Price: $49.99, Category: Clothing
