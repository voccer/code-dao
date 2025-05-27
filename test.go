package main

import (
	"fmt"
)

func test(b []int) {
	b = append(b, 1)
	fmt.Printf("%p", &b)
	b = append(b, 1)
	fmt.Printf("%p", &b)
	b = append(b, 1)
}

func main() {
	b := make([]int, 5, 5)

	fmt.Printf("%p:", &b)
	// fmt.Println(b)

	test(b)

	// fmt.Println(b)
	fmt.Printf("%p:", &b)
	// for i := 0; i < len(b); i++ {
	// 	fmt.Printf(b)
	// }
}
