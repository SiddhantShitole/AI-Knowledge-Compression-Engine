import { useState } from "react";
import { generatePath } from "../api/api";

function TopicInput({ setPath }) {

  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!topic.trim()) return;

    setLoading(true);

    const data = await generatePath(topic);

    console.log(data);

    setPath(data.graph);

    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "25px",
        alignItems: "center"
      }}
    >
{/* LEFT SIDE GRAPH */}
      <input
        type="text"
        placeholder="Enter topic (e.g. Semiconductor)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}

        
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}

        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: "8px",
          border: "1px solid #334155",
          background: "#111827",
          color: "#e2e8f0",
          outline: "none",
          fontSize: "14px"
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "12px 18px",
          borderRadius: "8px",
          border: "none",
          background: loading
            ? "#475569"
            : "linear-gradient(135deg,#6366f1,#8b5cf6)",
          color: "white",
          fontWeight: "500",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

    </div>
  );
}

export default TopicInput;