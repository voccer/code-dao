package main

import (
	"fmt"
)

func findCenter(edges *[][]int) int {
	node1 := (*edges)[0][0]
	node2 := (*edges)[0][1]

	if node1 == (*edges)[1][0] || node1 == (*edges)[1][1] {
		return node1
	}

	return node2
}

func main() {
	edges := [][]int{{1, 2}, {2, 3}, {4, 2}}
	fmt.Printf("%v", edges)
}
