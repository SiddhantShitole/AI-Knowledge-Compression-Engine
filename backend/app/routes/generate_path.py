from fastapi import APIRouter
from pydantic import BaseModel

from app.ai_modules.concept_extractor import extract_concepts
from app.graph_engine.concept_graph import build_graph
from app.compression.compression_engine import compress_graph

router = APIRouter()

class TopicRequest(BaseModel):
    topic: str


@router.post("/generate-path")
def generate_path(request: TopicRequest):

    topic = request.topic

    concepts = extract_concepts(topic)

    graph = build_graph(concepts)

    path = compress_graph(graph)

    return {"learning_path": path}