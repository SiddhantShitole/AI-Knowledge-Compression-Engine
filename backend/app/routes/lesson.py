from fastapi import APIRouter
from app.ai_modules.lesson_generator import generate_lesson

router = APIRouter()

@router.get("/lesson/{concept}")
def lesson(concept: str):

    lesson_data = generate_lesson(concept)

    return {"lesson": lesson_data}