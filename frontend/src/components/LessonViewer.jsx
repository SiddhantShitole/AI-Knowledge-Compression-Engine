export default function LessonViewer({ lesson, onQuiz }) {

  if (!lesson) return null;

  return (
    <div style={{ marginTop: "30px" }}>

      <h2>{lesson.concept}</h2>

      <p>{lesson.explanation}</p>

      {lesson.example && (
        <p>
          <b>Example:</b> {lesson.example}
        </p>
      )}

      <button onClick={() => onQuiz(lesson.concept)}>
        Take Quiz
      </button>

    </div>
  );
}