function isBipartite(graph) {
  const colorCodes = {} // 1 for red, -1 for blue

  const queue = []
  for (let i = graph.length - 1; i >= 0; i--) {
    queue.push(parseInt(i))
  }

  while (queue.length) {
    const node = queue.pop()
    colorCodes[node] = colorCodes[node] || 1
    for (const neighbor of graph[node]) {
      if (!colorCodes[neighbor]) {
        colorCodes[neighbor] = -colorCodes[node]
        queue.push(neighbor)
      } else if (colorCodes[neighbor] === colorCodes[node]) {
        return false
      }
    }
  }

  return true
}

graph = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
]

// graph = [
//   [1, 3],
//   [0, 2],
//   [1, 3],
//   [0, 2],
// ]

// graph = [[1], [0, 3], [3], [1, 2]]

res = isBipartite(graph)
console.log(res)
