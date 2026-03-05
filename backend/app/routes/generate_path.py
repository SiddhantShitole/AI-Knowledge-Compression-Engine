from fastapi import APIRouter
from pydantic import BaseModel

from app.ai_modules.concept_extractor import extract_concepts
from app.graph_engine.concept_graph import build_graph
from app.compression.compression_engine import compress_graph

router = APIRouter()

class TopicRequest(BaseModel):
    topic: str
    time_available: int


@router.post("/generate-path")
def generate_path(request: TopicRequest):

    topic = request.topic
    time_available = request.time_available

    concepts = extract_concepts(topic)

    graph = build_graph(concepts)

    path = compress_graph(graph, time_available)

    return {"learning_path": path}