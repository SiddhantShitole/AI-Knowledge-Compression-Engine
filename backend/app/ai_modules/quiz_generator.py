def generate_quiz(concept: str):

    return {
        "questions": [
            {
                "question": f"What is the main purpose of {concept}?",
                "options": [
                    "Understand the concept",
                    "Ignore the concept",
                    "Delete the concept",
                    "None of the above"
                ],
                "correct": 0
            },
            {
                "question": f"Which statement about {concept} is correct?",
                "options": [
                    f"{concept} is an important topic",
                    f"{concept} has no importance",
                    f"{concept} is unrelated",
                    "None of the above"
                ],
                "correct": 0
            }
        ]
    }
