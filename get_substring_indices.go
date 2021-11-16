package main

import (
	"fmt"
)

func getSubstringIndices(s string, words []string) []int {
	res := []int{}
	wordLen := len(words[0])

	freqWord := make(map[string]int)

	for _, word := range words {
		if _, ok := freqWord[word]; ok {
			freqWord[word] += 1
		} else {
			freqWord[word] = 1
		}
	}

	for i := 0; i < wordLen; i++ {
		pos := i
		cnt := 0
		matches := make(map[string]int)
		idxS := pos + wordLen

		for idxS <= len(s) {
			word := s[idxS-wordLen : idxS]

			if _, ok := freqWord[word]; ok {

				if _, ok := matches[word]; ok {
					matches[word] += 1
				} else {
					matches[word] = 1
				}
				cnt += 1

				for matches[word] > freqWord[word] {
					matches[s[pos:pos+wordLen]] -= 1
					pos += wordLen
					cnt -= 1
				}

				if cnt == len(words) {
					res = append(res, pos)
				}
			} else {
				//reset
				matches = make(map[string]int)
				cnt = 0
				pos = idxS
			}
			idxS += wordLen

		}
	}

	return res
}

func main() {

	s := "barfoofoobarthefoobarman"
	words := []string{"foo", "bar", "the"}

	substringIndices := getSubstringIndices(s, words)

	fmt.Println(substringIndices)
}
