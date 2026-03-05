export default function PathViewer({ path, openLesson }) {

  return (
    <div>

      <h2>Learning Path</h2>

      {path.map((concept, index) => (
        <div key={index} onClick={()=>openLesson(concept)} style={{cursor:"pointer"}}>
          {concept}
        </div>
      ))}

    </div>
  );
}