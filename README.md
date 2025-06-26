# Taylor Swift Lyrics Visualizer

An interactive Streamlit web app that allows users to enter the title of a **Taylor Swift** song, fetches the lyrics from the Genius API, 
and generates a visually appealing **Word Cloud** based on the lyrics. This project combines Python, Streamlit, and natural 
language visualization for an engaging fan experience.

##  Features

- Input a Taylor Swift song title
- Automatically fetch lyrics using the **Genius API**
- Generate and display a **Word Cloud**
- Preview full lyrics in a scrollable box
- Responsive and user-friendly interface built with **Streamlit**

## Tech Stack

- [Python 3.x](https://www.python.org/)
- [Streamlit](https://streamlit.io/)
- [Genius API](https://genius.com/developers)
- [lyricsgenius](https://github.com/johnwmillr/LyricsGenius)
- [WordCloud](https://github.com/amueller/word_cloud)
- [dotenv](https://pypi.org/project/python-dotenv/)

## Installation

pip install -r requirements.txt
GENIUS_API_TOKEN=7WSKX5NfTjJ7O-X7049_L6vYKBB8eHT8bjdAtviIUQmQVsFsgCPcu6FcxKTXRVoC
streamlit run app.py
