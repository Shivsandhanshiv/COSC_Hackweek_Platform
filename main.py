from fastapi import FastAPI, Query
from endpoints import reverse_text, encode_text, filter_data
from typing import List

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to BlackboxClone API!"}

@app.get("/reverse")
def reverse(text: str = Query(...)):
    return {"original": text, "reversed": reverse_text(text)}

@app.get("/encode")
def encode(text: str = Query(...)):
    return {"original": text, "encoded": encode_text(text)}

@app.get("/filter")
def filter_items(data: List[str] = Query(...), keyword: str = Query(...)):
    return {"keyword": keyword, "filtered": filter_data(data, keyword)}
