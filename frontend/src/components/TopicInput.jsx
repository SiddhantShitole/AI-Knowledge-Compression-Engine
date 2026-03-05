import { useState } from "react";
import API from "../api/api";

export default function TopicInput({ setPath }) {

  const [topic, setTopic] = useState("");

  const generatePath = async () => {
    const res = await API.post("/generate-path", { topic });
    setPath(res.data.learning_path);
  };

  return (
    <div style={{marginBottom:"20px"}}>

      <h2>Enter Topic</h2>

      <input
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        placeholder="Learn VLSI"
      />

      <button onClick={generatePath}>
        Generate Learning Path
      </button>

    </div>
  );
}