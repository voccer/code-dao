package main

import (
	"fmt"
)

type Node struct {
	data int
	next *Node
}

func main() {
	lst := []int{1, 1, 1, 2, 3}
	head := createLinkedList(&lst)
	fmt.Println("Before deleting duplicate nodes:")
	printLinkedList(head)

	head = deleteDuplicateNodes(head)
	fmt.Println("After deleting duplicate nodes")
	printLinkedList(head)
}

func createLinkedList(lst *[]int) *Node {
	if len(*lst) == 0 {
		return nil
	}

	head := &Node{data: (*lst)[0]}
	curr := head
	for i := 1; i < len(*lst); i++ {
		// insert at the end
		curr.next = &Node{data: (*lst)[i]}
		curr = curr.next
	}

	return head
}

func printLinkedList(head *Node) {
	curr := head
	for curr != nil {
		fmt.Println(curr.data)
		curr = curr.next
	}
}

func deleteDuplicateNodes(head *Node) *Node {
	doesDuplicateExist := make(map[int]int) // 1 is visited, undefined is not visited, 2 is duplicate

	// create a map of duplicate nodes
	curr := head
	for curr != nil {
		if _, ok := doesDuplicateExist[curr.data]; ok {
			doesDuplicateExist[curr.data] = 2
		} else {
			doesDuplicateExist[curr.data] = 1
		}
		curr = curr.next
	}

	// remove duplicate nodes
	curr = head
	prev := head

	for curr != nil {
		if doesDuplicateExist[curr.data] == 2 {
			if curr == head {
				head = curr.next
			} else {
				prev.next = curr.next
			}
		} else {
			prev = curr
		}
		curr = curr.next
	}

	return head
}
