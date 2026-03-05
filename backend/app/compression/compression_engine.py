def compress_graph(graph, max_nodes=5):

    nodes = list(graph.nodes)

    if len(nodes) > max_nodes:
        nodes = nodes[:max_nodes]

    return nodes