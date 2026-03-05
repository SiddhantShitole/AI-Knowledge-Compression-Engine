import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function ConceptGraph({ path, openLesson }) {

  const nodes = path.map((concept, index) => ({
    id: index.toString(),
    data: { label: concept },
    position: { x: index * 200, y: 100 }
  }));

  const edges = path.slice(0, -1).map((_, index) => ({
    id: `e${index}`,
    source: index.toString(),
    target: (index + 1).toString()
  }));

  const onNodeClick = (_, node) => {
    openLesson(node.data.label);
  };

  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
      />
    </div>
  );
}