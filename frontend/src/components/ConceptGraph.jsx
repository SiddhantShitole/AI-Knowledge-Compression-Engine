import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

const CardNode = ({ data }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        background: "#fff",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "200px",
        textAlign: "center",
        fontWeight: "500"
      }}
    >
      {data.label}
    </div>
  );
};

const nodeTypes = {
  card: CardNode
};

function ConceptGraph({ path, openLesson }) {

  const nodes = path.map((concept, index) => ({
  id: index.toString(),
  type: "card",
  data: { label: concept },
  position: { x: 200, y: index * 120 }
}));

  const edges = path.slice(1).map((_, index) => ({
    id: `e${index}`,
    source: index.toString(),
    target: (index + 1).toString(),
    animated: true,
    style: { stroke: "#6366f1", strokeWidth: 2 }
  }));

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={(event, node) => openLesson(node.data.label)}
        fitView
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default ConceptGraph;