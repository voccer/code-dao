package main

import (
	"fmt"
)

func checkBipartite(graph [][]int) bool {
	colorCodes := make(map[int]int) // 1 for red, -1 for blue
	stack := []int{}
	for i := 0; i < len(graph); i++ {
		stack = append(stack, i)
	}

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if _, ok := colorCodes[node]; !ok {
			colorCodes[node] = 1
		}

		for _, neighbor := range graph[node] {
			if _, ok := colorCodes[neighbor]; ok {
				if colorCodes[node] == colorCodes[neighbor] {
					return false
				}
			} else {
				colorCodes[neighbor] = -colorCodes[node]
				stack = append(stack, neighbor)
			}
		}
	}

	return true
}

func main() {
	//{{1},{0,3},{3},{1,2}}
	// graph := [][]int{{1, 3}, {0, 2}, {1, 3}, {0, 2}}
	graph := [][]int{{1}, {0, 3}, {3}, {1, 2}}

	// graph := [][]int{{1, 2, 3}, {0, 2}, {0, 1, 3}, {0, 2}}
	isBipartite := checkBipartite(graph)
	fmt.Printf("%v", isBipartite)
}
