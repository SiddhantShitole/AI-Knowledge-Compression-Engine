import { useState } from "react";
import TopicInput from "./components/TopicInput";
import LessonViewer from "./components/LessonViewer";
import ConceptGraph from "./components/ConceptGraph";
import API from "./api/api";

function App() {

  const [path, setPath] = useState([]);
  const [lesson, setLesson] = useState(null);

  const openLesson = async (concept) => {
    const res = await API.get(`/lesson/${concept}`);
    setLesson(res.data.lesson);
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>AI Knowledge Compression Engine</h1>

      <TopicInput setPath={setPath} />

      {path.length > 0 && (
        <>
          <h2>Learning Path Graph</h2>
          <ConceptGraph path={path} openLesson={openLesson} />
        </>
      )}

      <LessonViewer lesson={lesson} />

    </div>
  );
}

export default App;