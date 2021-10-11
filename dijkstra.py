import sys
MAX_SIZE = sys.maxsize

# nodes: list of node
# edges: list, [node1, node2, distince]


def dijkstra(nodes, edges):
    visited = set()
    distinces = {}
    for node in nodes:
        distinces[node] = MAX_SIZE

    distinces[nodes[0]] = 0
    visited.add(nodes[0])

    next_node = nodes[0]
    for i in range(len(nodes)):
        node = next_node
        min_distince = MAX_SIZE
        for edge in edges:
            if(edge[0] == node and edge[1] not in visited):
                distince = edge[2]
                if(distinces[edge[0]] + distince < distinces[edge[1]]):
                    distinces[edge[1]] = distinces[edge[0]] + distince
                if(min_distince > distinces[edge[1]]):
                    min_distince = distinces[edge[1]]
                    next_node = edge[1]

            if(edge[1] == node and edge[0] not in visited):
                distince = edge[2]
                if(distinces[edge[1]] + distince < distinces[edge[0]]):
                    distinces[edge[0]] = distinces[edge[1]] + distince
                if(min_distince > distinces[edge[0]]):
                    min_distince = distinces[edge[0]]
                    next_node = edge[0]

        visited.add(next_node)

    return distinces


nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
# edges = [[1, 2, 3], [1, 3, 10], [1, 6, 11], [6, 3, 3], [
# 6, 5, 7], [2, 3, 2], [3, 4, 4], [5, 4, 6], [2, 4, 1]]
edges = [[0, 1, 4], [0, 7, 8],
         [1, 7, 11], [1, 2, 8],
         [7, 8, 7], [6, 7, 1],
         [2, 8, 2], [8, 6, 6],
         [2, 5, 4], [6, 5, 2],
         [2, 3, 7], [3, 5, 14],
         [3, 4, 9], [5, 4, 10]
         ]
paths = dijkstra(nodes, edges)
print(paths)
