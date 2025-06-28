def reverse_text(text: str) -> str:
    return text[::-1]

def encode_text(text: str) -> str:
    return text.encode("utf-8").hex()  

def filter_data(data: list, keyword: str) -> list:
    return [item for item in data if keyword.lower() in item.lower()]
