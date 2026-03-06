import { useState } from "react";
import { generatePath } from "../api/api";

function TopicInput({ setPath }) {

  const [topic, setTopic] = useState("");

  const handleSubmit = async () => {
    const data = await generatePath(topic);

    console.log(data);

    setPath(data.graph); // IMPORTANT
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Generate Path
      </button>

    </div>
  );
}

export default TopicInput;