export default function LessonViewer({ lesson }) {

  if(!lesson) return null;

  return (
    <div>

      <h2>{lesson.concept}</h2>

      <p>{lesson.explanation}</p>

      <p><b>Example:</b> {lesson.example}</p>

      <p><b>Quiz:</b> {lesson.quiz.question}</p>

    </div>
  );
}