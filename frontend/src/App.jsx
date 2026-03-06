import { useState } from "react";
import TopicInput from "./components/TopicInput";
import LessonViewer from "./components/LessonViewer";
import ConceptGraph from "./components/ConceptGraph";
import { getLesson } from "./api/api";

function App() {

  const [path, setPath] = useState([]);
  const [lesson, setLesson] = useState(null);

  const openLesson = async (concept) => {
    const data = await getLesson(concept);
    setLesson(data.lesson);
  };
return (
  <div style={{
    padding: "40px",
    maxWidth: "1000px",
    margin: "auto",
    fontFamily: "Arial"
  }}>

    <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
      AI Knowledge Compression Engine
    </h1>

    <TopicInput setPath={setPath} />

    {path && path.length > 0 && (
      <>
        <h2 style={{ marginTop: "40px" }}>
          Learning Path Graph
        </h2>

        <ConceptGraph path={path} openLesson={openLesson} />
      </>
    )}

    <LessonViewer lesson={lesson} />

  </div>
);
}

export default App;