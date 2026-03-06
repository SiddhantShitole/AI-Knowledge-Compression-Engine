export default function LessonViewer({ lesson }) {

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

      {lesson.quiz && (
        <p>
          <b>Quiz:</b> {lesson.quiz.question}
        </p>
      )}

    </div>
  );
}