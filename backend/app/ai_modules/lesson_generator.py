def generate_lesson(concept):

    prompt = f"""
Explain the concept: {concept}

Respond in this format:

Concept: <concept name>
Explanation: <short explanation>
Example: <simple real-world example>
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=250
    )

    text = response.choices[0].message.content

    explanation = ""
    example = ""

    for line in text.split("\n"):
        if line.lower().startswith("explanation"):
            explanation = line.split(":",1)[1].strip()
        elif line.lower().startswith("example"):
            example = line.split(":",1)[1].strip()

    return {
        "concept": concept,
        "explanation": explanation if explanation else text,
        "example": example
    }
    def generate_quiz(concept):

    prompt = f"""
Create one conceptual quiz question about {concept}.

Return in format:

Question: <question>
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.4,
        max_tokens=120
    )

    text = response.choices[0].message.content

    question = text.split(":",1)[1].strip() if ":" in text else text

    return {
        "question": question
    }