from fastapi import APIRouter
from app.ai_modules.quiz_generator import generate_quiz

router = APIRouter()

@router.get("/quiz/{concept}")
def get_quiz(concept: str):

    return generate_quiz(concept)


@router.post("/submit-quiz")
def submit_quiz(answer: str):

    score = 1 if answer.lower() == "correct" else 0

    return {"score": score}
