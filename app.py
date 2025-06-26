import streamlit as st
import lyricsgenius
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from dotenv import load_dotenv
import os

load_dotenv()
GENIUS_API_TOKEN = os.getenv("GENIUS_API_TOKEN")

genius = lyricsgenius.Genius(GENIUS_API_TOKEN)
genius.skip_non_songs = True
genius.excluded_terms = ["(Remix)", "(Live)"]
genius.verbose = False

st.set_page_config(page_title="🎤 Taylor Swift Lyrics Visualizer", layout="centered")

st.title("🎤 Taylor Swift Lyrics Visualizer")
st.markdown("Enter a **Taylor Swift** song title and visualize the lyrics as a word cloud!")

song_title = st.text_input("🎵 Enter Song Title", "")

def get_lyrics(title):
    try:
        st.info("Searching Genius for lyrics...")
        song = genius.search_song(title, "Taylor Swift")
        if song:
            return song.lyrics
        else:
            return None
    except Exception as e:
        st.error(f"Error fetching lyrics: {e}")
        return None

def create_wordcloud(text):
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation="bilinear")
    plt.axis("off")
    st.pyplot(plt)

if st.button("Generate Word Cloud"):
    if not song_title:
        st.warning("Please enter a song title.")
    else:
        lyrics = get_lyrics(song_title)
        if lyrics:
            st.subheader("🎶 Lyrics Preview")
            st.text_area("Lyrics", lyrics, height=300)
            st.subheader("☁️ Word Cloud")
            create_wordcloud(lyrics)
        else:
            st.error("Lyrics not found or failed to fetch. Please try a different song.")
