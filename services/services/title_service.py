from ai.ollama_client import generate_title

def suggest_title_service(description):
  prompt = f"""
  Gere um título curto (máx 6 palavras) para uma tarefa. 
  Retorne apenas o título, sem aspas e sem ponto final.
  Descrição: {description}
  """.strip()
  
  return generate_title(prompt)