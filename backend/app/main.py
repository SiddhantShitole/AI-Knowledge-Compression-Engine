from fastapi import FastAPI
from routes import generate_path, lesson, quiz

app = FastAPI()

app.include_router(generate_path.router)
app.include_router(lesson.router)
app.include_router(quiz.router)

@app.get("/")
def root():
    return {"message": "AI Knowledge Compression Engine"}