package main

import "fmt"

func checkValidPath(n int, edges *[][]int, start int, end int) bool {
	if n == 1 {
		return true
	}

	visited := make(map[int]bool)
	queue := []int{}
	queue = append(queue, start)
	visited[start] = true

	neighbors := make(map[int][]int)
	for _, edge := range *edges {
		neighbors[edge[0]] = append(neighbors[edge[0]], edge[1])
		neighbors[edge[1]] = append(neighbors[edge[1]], edge[0])
	}

	for {
		node := queue[0]
		queue[0] = -1
		queue = queue[1:]
		for _, v := range neighbors[node] {
			if end == v {
				return true
			}
			_, ok := visited[v]
			if !ok {
				queue = append(queue, v)
				visited[v] = true
			}
		}
		if len(queue) == 0 {
			return false
		}
	}
}

func main() {
	n := 6
	edges := [][]int{{0, 1}, {0, 2}, {3, 5}, {5, 4}, {4, 3}}
	start := 0
	end := 5

	isValidPath := checkValidPath(n, &edges, start, end)
	fmt.Printf("%v", isValidPath)
}
