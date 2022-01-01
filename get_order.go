package main

import (
	"fmt"
	"strings"
)

func createMap() map[string][]string {
	digitCharsMap := make(map[string][]string)

	j := 2
	i := 0

	for ch := 'a'; ch <= 'z'; ch++ {
		if j == 7 || j == 9 {
			if i == 4 {
				j += 1
				i = 0
			}
		} else {
			if i == 3 {
				j += 1
				i = 0
			}
		}

		numberStr := fmt.Sprintf("%v", j)
		digitCharsMap[numberStr] = append(digitCharsMap[numberStr], fmt.Sprintf("%c", ch))
		i++
	}

	return digitCharsMap
}

func try(k int, digitsArr []string, digitCharsMap map[string][]string, s []string, orders *[]string) {
	if k == len(digitsArr) {
		*orders = append(*orders, strings.Join(s, ""))
		return
	}
	for _, ch := range digitCharsMap[fmt.Sprintf("%v", digitsArr[k])] {
		s[k] = ch
		try(k+1, digitsArr, digitCharsMap, s, orders)
	}
}

func getOrder(digits string) []string {
	digitCharsMap := createMap()

	orders := []string{}
	digitsArr := strings.Split(digits, "")
	s := make([]string, len(digitsArr))
	
	if len(digitsArr) == 0 {
		return orders
	}

	try(0, digitsArr, digitCharsMap, s, &orders)

	return orders
}

func main() {

	digits := "233"
	orders := getOrder(digits)
	fmt.Printf("%v", orders)
}
