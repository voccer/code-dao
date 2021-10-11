class ItemNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class FreqNode {
  constructor(freq) {
    this.freq = freq
    this.prev = null
    this.next = null
    this.items = new ItemDLL()
  }
}

class ItemDLL {
  constructor() {
    this.head = null // ItemNode
    this.tail = null // ItemNode
    this.len = 0
  }

  append(node) {
    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node
    this.len += 1
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

    this.len -= 1
  }
}

class FreqDLL {
  constructor() {
    this.head = null //FreqNode
  }

  push(node) {
    if (this.head !== null) {
      this.head.prev = node
      node.next = this.head
    }

    this.head = node
  }

  insertAfter(prevNode, node) {
    if (prevNode === null) {
      return
    }
    node.next = prevNode.next
    prevNode.next = node
    node.prev = prevNode

    if (prevNode.next !== null) {
      prevNode.next.prev = prevNode
    }
  }

  remove(node) {
    if (node.prev === null) {
      this.head = node.next
      if (this.head !== null) {
        this.head.prev = null
      }
    }
    if (node.next === null) {
      node.prev.next = null
      node.prev = null
    }
    if (node.next !== null && node.prev !== null) {
      node.prev.next = node.next
      node.next.prev = node.prev
      node.next = null
      node.prev = null
    }
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity // capacity
    this.cache = new Map() // <key, ItemNode>
    this.cnt = new Map() // <key, freq>
    this.freqMap = new Map() // <freq, FreqNode>
    this.freqDLL = new FreqDLL() // DLL for freq
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }
    const itemNode = this.cache.get(key)
    this.shiftItemNode(itemNode)

    return itemNode.value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const itemNode = this.cache.get(key)

      this.shiftItemNode(itemNode)
      itemNode.value = value
    } else {
      if (this.cache.size === this.capacity) {
        const minFreq = this.freqDLL.head.freq

        const removeFreqNode = this.freqMap.get(minFreq)
        const removeItemNode = removeFreqNode.items.head
        const removeKey = removeItemNode.key

        this.cache.delete(removeKey)
        this.cnt.delete(removeKey)
        removeFreqNode.items.remove(removeItemNode)

        // remove if freqNode not have items
        if (removeFreqNode.items.len === 0) {
          this.freqMap.delete(minFreq)
          this.freqDLL.remove(removeFreqNode)
        }
      }

      const freq = 1
      const node = new ItemNode(key, value)

      if (!this.freqMap.has(freq)) {
        const freqNode = new FreqNode(freq)
        this.freqDLL.push(freqNode)
        this.freqMap.set(freq, freqNode)
        freqNode.items.append(node)
      } else {
        const freqNode = this.freqMap.get(freq)
        freqNode.items.append(node)
      }
      this.cache.set(key, node)
      this.cnt.set(key, freq)
    }
  }

  shiftItemNode(itemNode) {
    const key = itemNode.key
    const freq = this.cnt.get(key)
    const nextFreq = freq + 1
    const freqNode = this.freqMap.get(freq)

    if (!this.freqMap.has(nextFreq)) {
      const insertFreqNode = new FreqNode(nextFreq)
      this.freqDLL.insertAfter(freqNode, insertFreqNode)
      this.freqMap.set(nextFreq, insertFreqNode)
    }
    freqNode.items.remove(itemNode)
    freqNode.next.items.append(itemNode)

    // remove if freqNode not have items
    if (freqNode.items.len === 0) {
      this.freqMap.delete(freq)
      this.freqDLL.remove(freqNode)
    }

    this.cnt.set(key, nextFreq)
    this.cache.set(key, itemNode)
  }
}

function print(lfu) {
  // console.log('cache::', lfu.cache)
  // console.log('cnt::', lfu.cnt)
  console.log('==========')
  // while (lfu.FreqDLL.next === null) {
  //   console.log()
  // }
  // console.log(lfu.freqDLL)
  for (const key of lfu.freqMap.keys()) {
    console.log('+++')

    console.log(lfu.freqMap.get(key))
    // for (const itemNode of lfu.freqMap.get(key).items) {
    //   console.log(itemNode)
    // }
  }
}

const lfu = new LFUCache(2)

console.log(lfu.put(1, 1))
console.log(lfu.put(2, 2))
console.log(lfu.get(1))

console.log(lfu.put(3, 3))

console.log(lfu.get(2))
console.log(lfu.get(3))
console.log(lfu.put(4, 4)) // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
console.log(lfu.get(1))
console.log(lfu.get(3))
console.log(lfu.get(4))
