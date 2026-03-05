def compress_graph(graph, time_available):

    nodes = list(graph.nodes)

    concept_time = 1

    max_concepts = max(1, time_available // concept_time)

    optimized = nodes[:max_concepts]

    return optimized