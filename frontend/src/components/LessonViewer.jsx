export default function LessonViewer({ lesson, onQuiz }) {

  if (!lesson || !lesson.lesson) {
    return (
      <div style={{ color: "#777" }}>
        <h3>Select a concept from the graph</h3>
        <p>Click any node on the left to view its lesson.</p>
      </div>
    );
  }

  const data = lesson.lesson;

  return (
    <div>

      <h2>{data.title}</h2>

      <p>{data.explanation}</p>

      {data.example && (
        <p>
          <b>Example:</b> {data.example}
        </p>
      )}

      <button
        onClick={() => onQuiz(data.title)}
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