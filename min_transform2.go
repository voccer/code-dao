package main

import (
	"fmt"
	"strings"
)

func calMinTransform(n int) int {
	binStr := fmt.Sprintf("%b", n)
	binArr := strings.Split(binStr, "")

	res := 0
	state := true
	lenBinArr := len(binArr)
	
	for i, c := range binArr {
		if c == "1" {
			steps := 1<<(lenBinArr-i) - 1
			if state {
				state = false
				res += steps
			} else {
				state = true
				res -= steps
			}
		}
	}

	return res
}

func main() {
	n := 333
	res := calMinTransform(n)
	fmt.Printf("res::%v\n", res)
}
