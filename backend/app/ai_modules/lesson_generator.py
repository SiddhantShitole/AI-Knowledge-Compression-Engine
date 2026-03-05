def generate_lesson(concept: str):

    lesson = {
        "concept": concept,
        "explanation": f"{concept} is an important topic that helps understand the fundamentals of the subject.",
        "example": f"A simple example of {concept} helps illustrate how it works in real systems.",
        "quiz": {
            "question": f"What best describes {concept}?",
            "options": [
                "A core concept in the subject",
                "An unrelated topic",
                "A hardware component",
                "A programming language"
            ],
            "answer": "A core concept in the subject"
        }
    }

    return lesson