import os
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
Explain the concept {concept} in a short compressed format.

Structure:
Key Idea
Explanation
Example
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=300
    )

    return response.choices[0].message.content