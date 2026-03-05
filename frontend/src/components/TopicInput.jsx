import { useState } from "react";
import API from "../api/api";

export default function TopicInput({ setPath }) {

  const [topic, setTopic] = useState("");
  const [time, setTime] = useState(5);

  const generatePath = async () => {

    const res = await API.post("/generate-path", {
      topic: topic,
      time_available: time
    });

    setPath(res.data.learning_path);
  };

  return (

    <div>

      <h2>Enter Topic</h2>

      <input
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        placeholder="Learn VLSI"
      />

      <h3>Available Learning Time (hours)</h3>

      <input
        type="number"
        value={time}
        onChange={(e)=>setTime(e.target.value)}
      />

      <button onClick={generatePath}>
        Generate Learning Path
      </button>

    </div>

  );
}