def detect_dependencies(concepts):

    edges = []

    for i in range(len(concepts) - 1):

        parent = concepts[i]
        child = concepts[i + 1]

        edges.append((parent, child))

    return edges