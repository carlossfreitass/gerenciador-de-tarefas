from flask import Flask, jsonify, request
from services.title_service import suggest_title_service

app = Flask(__name__)
app.json.ensure_ascii = False

@app.get('/suggest-title')
def suggest_title():
  description = request.args.get("description")
  title = suggest_title_service(description)
  return jsonify({ "title": title }), 200