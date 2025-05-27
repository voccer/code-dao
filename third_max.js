function findThirdMax(pnums) {
  let max1 = -(2 ** 31)
  let max2 = -(2 ** 31)
  let max3 = -(2 ** 31)

  const nums = new Set(pnums)

  for (const num of nums) {
    if (num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    } else if (num > max2) {
      max3 = max2
      max2 = num
    } else if (num > max3) {
      max3 = num
    }
  }

  if (nums.size < 3) {
    return max1
  }

  return max3
}

const nums = [1, 2, 3, 4, 5, 1, 2]

const ret = findThirdMax(nums)
console.log(ret)
