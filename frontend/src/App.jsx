import React, { useState } from "react";
import TopicInput from "./components/TopicInput";
import LessonViewer from "./components/LessonViewer";
import ConceptGraph from "./components/ConceptGraph";

function App() {

  const [path, setPath] = useState([]);
  const [lesson, setLesson] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const openQuiz = async (concept) => {

    const res = await fetch(
      `http://127.0.0.1:8000/quiz/${encodeURIComponent(concept)}`
    );

    const data = await res.json();

    setQuiz(data);
  };

  const openLesson = async (concept) => {
  setQuiz(null);
  const res = await fetch(
    `http://127.0.0.1:8000/lesson/${encodeURIComponent(concept)}`
  );

  const data = await res.json();

  console.log("Lesson:", data);

  setLesson(data);
  setQuiz(null);
};
const checkAnswers = () => {
console.log("Selected:", answers);
console.log("Correct:", quiz.questions);
  let correct = 0;

  quiz.questions.forEach((q, index) => {
    if (answers[index] === q.correct) {
      correct++;
    }
  });

  setScore(correct);
};
  return (
    <div
  style={{
    display: "flex",
    height: "100vh",
    background: "#000000",
    color: "#e2e8f0",
    fontFamily: "Inter, sans-serif"
  }}
>

      {/* LEFT SIDE GRAPH */}
      <div
  style={{
    flex: 1,
    borderRight: "1px solid #1e293b",
    padding: "25px",
    background: "#020617"
  }}
>

        <h2 style={{ marginBottom: "20px", color: "#60a5fa" }}>
  Learning Graph
</h2>

        <TopicInput setPath={setPath} />

        {path && path.length > 0 && (
          <ConceptGraph path={path} openLesson={openLesson} />
        )}

      </div>

      {/* RIGHT SIDE LESSON PANEL */}
      <div
  style={{
    flex: 1,
    padding: "35px",
    overflowY: "auto",
    background: "#020617"
  }}
>

        <LessonViewer lesson={lesson} onQuiz={openQuiz} />

        {quiz && (
          <div style={{ marginTop: "20px" }}>

            <h3>Quiz</h3>

            {quiz.questions.map((q, i) => (
              <div key={i} style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#111827"
              }}>

                <p style={{ color: "#e2e8f0", fontWeight: "500" }}>
  {i + 1}. {q.question}
</p>

                {q.options.map((opt, idx) => (
  <label
  key={idx}
  style={{
    display: "block",
    padding: "6px 0",
    cursor: "pointer",
    color: "#cbd5f5"
  }}
>
    <input
  type="radio"
  name={`q${i}`}
  value={idx}
  onChange={(e) =>
  setAnswers((prev) => ({
    ...prev,
    [i]: Number(e.target.value)
  }))
}
/>
    {opt}
  </label>
))}

              </div>
            ))}

            {/* CHECK ANSWERS BUTTON */}
            <button
  onClick={checkAnswers}
  style={{
  marginTop: "25px",
  padding: "12px 22px",
  background: "linear-gradient(135deg,#22c55e,#16a34a)",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "500",
  cursor: "pointer"
}}
>
  Check Answers
</button>
{score !== null && (
  <div
    style={{
      marginTop: "20px",
      padding: "15px",
      borderRadius: "10px",
      background: "#020617",
      border: "1px solid #22c55e",
      color: "#4ade80",
      fontWeight: "600"
    }}
  >
    Score: {score} / {quiz.questions.length}
  </div>
)}
          </div>
        )}

      </div>

    </div>
  );
}

export default App;