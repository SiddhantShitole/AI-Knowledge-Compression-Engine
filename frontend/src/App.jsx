import { useState } from "react";
import TopicInput from "./components/TopicInput";
import PathViewer from "./components/PathViewer";
import LessonViewer from "./components/LessonViewer";
import API from "./api/api";

function App() {

  const [path, setPath] = useState([]);
  const [lesson, setLesson] = useState(null);

  const openLesson = async (concept) => {

    const res = await API.get(`/lesson/${concept}`);
    setLesson(res.data.lesson);

  };

  return (

    <div style={{padding:"40px"}}>

      <h1>AI Knowledge Compression Engine</h1>

      <TopicInput setPath={setPath} />

      <PathViewer path={path} openLesson={openLesson} />

      <LessonViewer lesson={lesson} />

    </div>

  );
}

export default App;