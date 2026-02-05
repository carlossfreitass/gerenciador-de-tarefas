import requests
from config import OLLAMA_URL, OLLAMA_MODEL

def generate_title(prompt: str) -> str:
  url = f"{OLLAMA_URL}/api/generate"
  payload = {
    "model": OLLAMA_MODEL,
    "prompt": prompt,
    "stream": False
  }

  resp = requests.post(url, json=payload, timeout=30)
  resp.raise_for_status()
  data = resp.json()

  title = (data.get('response') or '').strip()
  return title