import networkx as nx

def build_graph(concepts):

    graph = nx.DiGraph()

    for i in range(len(concepts) - 1):
        graph.add_edge(concepts[i], concepts[i+1])

    return graph