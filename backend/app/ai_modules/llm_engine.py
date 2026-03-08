import os
import json
import re
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def extract_concepts(topic):

    prompt = f"""
Extract the core learning concepts required to understand {topic}.

Rules:
- Only concept names
- No explanations
- One concept per line
- Maximum 8 concepts

Example:
Semiconductor Fundamentals
MOSFET Operation
CMOS Logic
Digital Circuit Design
VLSI Design Flow
Physical Layout
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=200
    )

    text = response.choices[0].message.content

    concepts = [c.strip("- ").strip() for c in text.split("\n") if c.strip()]

    return concepts


def generate_lesson(concept):

    prompt = f"""
Explain the concept **{concept}** in a concise educational way.

Structure:
1. Definition
2. Key idea
3. Example
4. Why it matters

Topic: {concept}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=300
    )

    text = response.choices[0].message.content

    match = re.search(r'\{[\s\S]*\}', text)

    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            pass

    return {
        "concept": concept,
        "explanation": text,
        "example": ""
    }


def generate_quiz(concept):

    prompt = f"""
Create a 3-question multiple choice quiz about the concept: {concept}.

Rules:
- Questions must strictly relate to {concept}.
- Avoid programming language questions unless the concept itself is about programming.
- Each question must have 4 options.
- Return JSON in this format:

{{
  "questions":[
    {{
      "question":"...",
      "options":["A","B","C","D"],
      "correct":0
    }}
  ]
}}
"""

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {"role": "system", "content": "You are an educational AI that generates quizzes about the given concept."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2
    )

    return json.loads(response.choices[0].message.content)