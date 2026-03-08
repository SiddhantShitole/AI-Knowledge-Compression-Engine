import React, { useState } from "react";
import TopicInput from "./components/TopicInput";
import LessonViewer from "./components/LessonViewer";
import ConceptGraph from "./components/ConceptGraph";

function App() {

  const [path, setPath] = useState([]);
  const [lesson, setLesson] = useState(null);
  const [quiz, setQuiz] = useState(null);

  const openQuiz = async (concept) => {

    const res = await fetch(
      `http://127.0.0.1:8000/quiz/${encodeURIComponent(concept)}`
    );

    const data = await res.json();

    setQuiz(data);
  };

  const openLesson = async (concept) => {

    const res = await fetch(
      `http://127.0.0.1:8000/lesson/${encodeURIComponent(concept)}`
    );

    const data = await res.json();

    setLesson(data);   // FIXED
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      fontFamily: "Arial"
    }}>

      {/* LEFT SIDE GRAPH */}
      <div style={{
        flex: 1,
        borderRight: "1px solid #ddd",
        padding: "20px"
      }}>

        <h2>Learning Graph</h2>

        <TopicInput setPath={setPath} />

        {path && path.length > 0 && (
          <ConceptGraph path={path} openLesson={openLesson} />
        )}

      </div>

      {/* RIGHT SIDE LESSON PANEL */}
      <div style={{
        flex: 1,
        padding: "30px",
        overflowY: "auto"
      }}>

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
                background: "#f9f9f9"
              }}>

                <p><b>{i + 1}. {q.question}</b></p>

                {q.options && q.options.map((opt, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={idx + 1}
                    />
                    {opt}
                  </div>
                ))}

              </div>
            ))}

            {/* CHECK ANSWERS BUTTON */}
            <button style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Check Answers
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;