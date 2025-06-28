# Dockerizeee – Flask App Containerization

This project demonstrates how to containerize a simple Flask app using Docker.


## Files

- `app.py` – Flask app with basic route
- `requirements.txt` – Python dependencies
- `Dockerfile` – Docker instructions
- `screenshot.png` – Output of running the app in container


## How to Run

docker build -t flask-docker-app .
docker run -p 5000:5000 flask-docker-app
