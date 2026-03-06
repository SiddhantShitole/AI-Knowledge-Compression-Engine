def extract_concepts(topic):

    try:

        prompt = f"""
Extract the essential concepts required to understand {topic}.
Return 6 concepts in logical order.
Only return the list.
"""

        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[{"role": "user", "content": prompt}]
        )

        text = response.choices[0].message.content

        concepts = [c.strip("- ").strip() for c in text.split("\n") if c.strip()]

        return concepts

    except Exception as e:
        print("LLM ERROR:", e)
        return ["Error generating concepts"]