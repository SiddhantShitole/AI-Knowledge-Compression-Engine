def compress_graph(graph, time_available):

    nodes = list(graph.nodes)

    # assume each concept takes 1 hour
    concept_time = 1

    max_concepts = max(1, time_available // concept_time)

    optimized_path = nodes[:max_concepts]

    return optimized_path