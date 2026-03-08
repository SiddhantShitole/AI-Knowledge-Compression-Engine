export default function LessonViewer({ lesson, onQuiz }) {

  if (!lesson || !lesson.lesson) {
    return (
      <div
  style={{
    background: "#111827",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)"
  }}
>
        <h3>Select a concept from the graph</h3>
        <p>Click any node on the left to view its lesson.</p>
      </div>
    );
  }

  const data = lesson.lesson;

  return (
    <div>

      <h2 style={{ color: "#38bdf8", marginBottom: "15px" }}>
  {data.title}
</h2>

      <p style={{ lineHeight: "1.6", color: "#cbd5f5" }}>
  {data.explanation}
</p>

      {data.example && (
        <p
  style={{
    marginTop: "15px",
    background: "#1e293b",
    padding: "12px",
    borderRadius: "8px"
  }}
>
  <b style={{ color: "#fbbf24" }}>Example:</b> {data.example}
</p>
      )}

      <button
        onClick={() => onQuiz(data.title)}
        style={{
  marginTop: "20px",
  padding: "12px 22px",
  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "500"
}}
      >
        Take Quiz
      </button>

    </div>
  );
}