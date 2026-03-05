def generate_lesson(concept: str):

    lesson = {
        "concept": concept,
        "explanation": f"{concept} explains an important principle required to understand the subject.",
        "example": f"A practical example of {concept} can be seen in real engineering systems.",
        "quiz": {
            "question": f"What is the main purpose of {concept}?",
            "options": [
                "Understanding system design",
                "Random topic",
                "Hardware failure",
                "Programming syntax"
            ],
            "answer": "Understanding system design"
        }
    }

    return lesson