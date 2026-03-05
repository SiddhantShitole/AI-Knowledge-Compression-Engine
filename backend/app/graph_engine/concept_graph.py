import networkx as nx

def build_graph(concepts):

    G = nx.DiGraph()

    for concept in concepts:
        G.add_node(concept)

    for i in range(len(concepts) - 1):
        G.add_edge(concepts[i], concepts[i+1])

    return G