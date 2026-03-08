from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.ai_modules.llm_engine import extract_concepts, generate_lesson, generate_quiz

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all for now
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-path")
async def generate_path(data: dict):

    topic = data["topic"]

    graph = extract_concepts(topic)

    return {
        "topic": topic,
        "graph": graph
    }

@app.get("/lesson/{concept}")
async def lesson(concept: str):

    lesson = generate_lesson(concept)

    return {"lesson": lesson}
@app.get("/quiz/{concept}")
async def quiz(concept: str):

    quiz = generate_quiz(concept)

    return quiz