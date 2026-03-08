import ReactFlow, { Background } from "reactflow";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

const CardNode = ({ data }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        background: "#111827",
        border: "1px solid #334155",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "200px",
        textAlign: "center",
        fontWeight: "500"
      }}
    >
      <Handle type="target" position={Position.Top} />
      
      {data.label}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
const nodeTypes = {
  card: CardNode
};

function ConceptGraph({ path, openLesson }) {

  if (!path || path.length === 0) return null;

  // create nodes
  const nodes = path.map((concept, index) => ({
    id: `${index}`,
    type: "card",
    data: { label: concept },
    position: { x: 200, y: index * 120 }
  }));

  // create edges safely
  const edges = [];

  for (let i = 0; i < path.length - 1; i++) {
    edges.push({
      id: `e${i}`,
      source: `${i}`,
      target: `${i + 1}`,
      animated: true,
      style: { stroke: "#6366f1", strokeWidth: 2 }
    });
  }

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={(event, node) => {
          console.log("Clicked:", node.data.label);
          openLesson(node.data.label);
        }}
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