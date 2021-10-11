function calMaxSum(nums, k) {
  const maxSums = Array(nums.length)

  maxSums[0] = nums[0]
  
  
  for (let i = 1; i < k; i++) {
    maxSums[i] = max > 0 ? max + nums[i] : nums[i]
    max = max > maxSums[i] ? max : maxSums[i]
  }

  for (let i = k; i < nums.length; i++) {
    max = maxSums[i - k]
    for (let j = i - k + 1; j < i; j++) {
      max = max > maxSums[j] ? max : maxSums[j]
    }
    maxSums[i] = max > 0 ? max + nums[i] : nums[i]
  }

  console.log(maxSums);
  let res = maxSums[0]
  for (let i = 1; i < maxSums.length; i++) {
    res = res > maxSums[i] ? res : maxSums[i]
  }
  console.log(res);
  return res
}
const nums = [10, -1, 0, 4, -20]
const k = 2

calMaxSum(nums, k)
