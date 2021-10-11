package main

import "fmt"

type Node struct {
	data  int
	index int
	next  *Node
	prev  *Node
}

type DLL struct {
	head *Node
	tail *Node
}

func (dll *DLL) init() {
	(*dll).head = nil
	(*dll).tail = nil
}

func (dll *DLL) append(node *Node) {
	if dll.head == nil {
		dll.head = node
	} else {
		dll.tail.next = node
	}
	dll.tail = node
}

func (dll *DLL) remove(node *Node) {
	if node.prev == nil {
		dll.head = node.next
		if dll.head != nil {
			dll.head.prev = nil
		}
	}
	if node.next == nil {
		dll.tail = node.prev
		if dll.tail != nil {
			dll.tail.next = nil
		}
	}

	if node.next != nil && node.prev != nil {
		node.prev.next = node.next
		node.next.prev = node.prev
		node.next = nil
		node.prev = nil
	}

}

func calMaxSum(nums []int, k int) int {
	dll := DLL{}
	dll.init()
	max := nums[0]
	for i := 0; i < len(nums); i++ {
		if dll.head != nil {
			if i-dll.head.index > k {
				dll.remove(dll.head)
			}
		}

		sum := nums[i]
		if dll.head != nil {
			sum += dll.head.data
		}
		if sum > max {
			max = sum
		}
		checkNode := dll.head
		for checkNode != nil {
			if checkNode.data <= sum {
				dll.remove(checkNode)
			}
			checkNode = checkNode.next
		}
		if sum > 0 {
			appendNode := Node{sum, i, nil, nil}
			dll.append(&appendNode)
		}
	}

	return max
}

func main() {
	nums := []int{10, -2, -10, -5, 20}
	k := 2
	fmt.Printf("%v", calMaxSum(nums, k))
}
