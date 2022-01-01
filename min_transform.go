package main

import (
	"fmt"
	"strings"
)

// var s [][]string

func printSolution(s *[][]string) {
	fmt.Printf("solution is::\n")
	for _, l := range *s {
		fmt.Printf("%s\n", l)
	}
	fmt.Println(len(*s))

}

func checkExist(binArr []string, s *[][]string) bool {
	isExist := false

	for _, v := range *s {
		flag := true
		for i, v1 := range v {
			if v1 != binArr[i] {
				flag = false
				break
			}
		}
		if flag {
			isExist = true
			break
		}
	}

	return isExist
}

func try(binArr []string, s *[][]string) {
	isZero := true
	for i := 0; i < len(binArr); i++ {
		if binArr[i] == "1" {
			isZero = false
		}
	}
	if isZero {
		
		printSolution(s)
	} else {
		for i := 0; i < len(binArr); i++ {
			nextBinArr := make([]string, len(binArr))
			copy(nextBinArr, binArr)
			if i == len(binArr)-1 {
				if nextBinArr[len(nextBinArr)-1] == "1" {
					nextBinArr[len(nextBinArr)-1] = "0"
				} else {
					nextBinArr[len(nextBinArr)-1] = "1"
				}
			} else {
				if binArr[i+1] == "1" {
					flag := true
					for j := i + 2; j < len(binArr); j++ {
						if binArr[j] == "1" {
							flag = false
						}
					}
					if flag == true {
						if nextBinArr[i] == "1" {
							nextBinArr[i] = "0"
						} else {
							nextBinArr[i] = "1"
						}
					} else {
						continue
					}
				} else {
					continue
				}
			}

			if !checkExist(nextBinArr, s) {
				*s = append(*s, nextBinArr)
				try(nextBinArr, s)
			}
		}
	}
}

func calMinTransform(n int) int {
	binStr := fmt.Sprintf("%b", n)
	binArr := strings.Split(binStr, "")
	var res int
	var s [][]string
	s = append(s, binArr)
	try(binArr, &s)

	return res - 1
}

func main() {
	n := 333
	fmt.Printf("%d\n", n)
	res := calMinTransform(n)
	fmt.Printf("%d", res)
	// for _, v := range s {
	// 	fmt.Println(v)
	// }
}
