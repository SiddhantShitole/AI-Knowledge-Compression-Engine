def generate_quiz(concept: str):

    return {
        "questions": [
            {
                "id": 1,
                "question": f"What is the main purpose of {concept}?",
                "options": [
                    "Understand the concept",
                    "Ignore the concept",
                    "Delete the concept",
                    "None of the above"
                ],
                "answer": "Understand the concept"
            },
            {
                "id": 2,
                "question": f"Which statement about {concept} is correct?",
                "options": [
                    "It is an important concept",
                    "It has no importance",
                    "It is unrelated",
                    "None"
                ],
                "answer": "It is an important concept"
            }
        ]
    }
