export default function LessonViewer({ lesson, onQuiz }) {

  if (!lesson) {
    return (
      <div style={{color:"#777"}}>
        <h3>Select a concept from the graph</h3>
        <p>Click any node on the left to view its lesson.</p>
      </div>
    );
  }

  return (
    <div>

      <h2>{lesson.concept}</h2>

      <p>{lesson.explanation}</p>

      {lesson.example && (
        <p>
          <b>Example:</b> {lesson.example}
        </p>
      )}

      <button
        onClick={() => onQuiz(lesson.concept)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Take Quiz
      </button>

    </div>
  );
}