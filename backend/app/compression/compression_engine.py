def compress_graph(graph, max_nodes=5):

    # get list of nodes
    nodes = list(graph.nodes)

    # keep only first N important nodes
    if len(nodes) > max_nodes:
        nodes = nodes[:max_nodes]

    return nodes