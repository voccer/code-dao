class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.storedCnt = 0
    this.cache = new Map()
  }
  get_(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)

      return this.cache.get(key)
    } else {
      return -1
    }
  }
  put_(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
      this.cache.set(key, value)
    } else {
      if (this.storedCnt + 1 > this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
        this.storedCnt -= 1
      }
      this.cache.set(key, value)
      this.storedCnt += 1
    }
  }
}

const LRUCacheObj = new LRUCache(2)

LRUCacheObj.put_(1, 1)
console.log(LRUCacheObj.get_(1))
LRUCacheObj.put_(2, 3)
console.log(LRUCacheObj.get_(1))
LRUCacheObj.put_(3, 4)
LRUCacheObj.put_(3, 2)
console.log(LRUCacheObj.get_(1))

LRUCacheObj.put_(4, 5)
console.log(LRUCacheObj.get_(1))
