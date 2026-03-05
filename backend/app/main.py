from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import generate_path, lesson, quiz

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(generate_path.router)
app.include_router(lesson.router)
app.include_router(quiz.router)

@app.get("/")
def root():
    return {"message": "AI Knowledge Compression Engine"}