class Node {
  constructor(index, data) {
    this.next = null
    this.prev = null
    this.data = data
    this.index = index
  }
}

class DLL {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(node) {
    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    
    this.tail = node
  }

  remove(node) {
    if (node.prev === null) {
      this.head = node.next
      if (this.head !== null) {
        this.head.prev = null
      }
    }
    if (node.next === null) {
      this.tail = node.prev
      if (this.tail !== null) {
        this.tail.next = null
      }
    }

    if (node.next !== null && node.prev !== null) {
      node.prev.next = node.next
      node.next.prev = node.prev
      node.next = null
      node.prev = null
    }
  }
}

function calMaxSum(nums, k) {
  const dll = new DLL()

  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    console.log('dll::', dll)
    if (dll.head !== null) {
      if (i - dll.head.index > k) {
        dll.remove(dll.head)
      }
    }

    const sum = nums[i] + (dll.head === null ? 0 : dll.head.data)
    max = sum > max ? sum : max
    let checkNode = dll.head
    while (checkNode !== null) {
      if (checkNode.data <= sum) {
        dll.remove(checkNode)
      }
      checkNode = checkNode.next
    }
    if (sum > 0) {
      dll.append(new Node(i, sum))
    }
  }
  console.log(max)
  return max
}

const nums = [10, 10, 10, 10, -10, -1, -10, -1, -10, 10, 10, 10, 10]
const k = 3

calMaxSum(nums, k)
