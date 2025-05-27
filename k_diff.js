function kDiffCnt(nums, k) {
  let cnt = 0
  const freq = {}
  for (const n of nums) {
    freq[n] = freq[n] ? freq[n] + 1 : 1
  }

  console.log(freq)
  // if (k === 0) {
  //   for (const key of Object.keys(freq)) {
  //     if (freq[key] > 1) {
  //       cnt++
  //     }
  //   }
  // } else {
  for (const key of Object.keys(freq)) {
    if (freq[parseInt(key) + k]) {
      cnt++
    }
  }
  // }

  return cnt
}

const nums = [1, 2, 4, 4, 3, 3, 0, 9, 2, 3]
const k = 0

console.log(kDiffCnt(nums, k))
