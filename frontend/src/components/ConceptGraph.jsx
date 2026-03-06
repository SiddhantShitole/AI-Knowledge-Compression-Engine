import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
const nodeTypes = {};

function ConceptGraph({ path }) {

  const nodes = path.map((concept, index) => ({
  id: index.toString(),
  data: { label: concept },
  position: { x: index * 250, y: 100 }
}));

  const edges = path.slice(1).map((_, index) => ({
  id: `e${index}`,
  source: index.toString(),
  target: (index + 1).toString(),
  animated: true
}));
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow nodes={nodes} edges={edges}>
  <Controls />
  <Background />
</ReactFlow>
    </div>
  );
}

export default ConceptGraph;