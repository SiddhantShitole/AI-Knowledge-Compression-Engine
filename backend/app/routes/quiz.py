from fastapi import APIRouter

router = APIRouter()

@router.post("/submit-quiz")
def submit_quiz(answer: str):

    if answer.lower() == "correct":
        score = 1
    else:
        score = 0

    return {"score": score}