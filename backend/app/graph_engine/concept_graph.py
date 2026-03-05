import networkx as nx

def build_graph(concepts, dependencies):

    G = nx.DiGraph()

    for concept in concepts:
        G.add_node(concept)

    for parent, child in dependencies:
        G.add_edge(parent, child)

    return G