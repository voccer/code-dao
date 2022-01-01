function totalCostCal(ins) {
  const nums = ins
  let sum = 0
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i]
    let left = 0
    let right = i - 1

    while (left <= right) {
      let mid = parseInt((left + right) / 2)

      if (x < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    let left2 = 0
    let right2 = i - 1

    while (left2 <= right2) {
      let mid = parseInt((left2 + right2) / 2)

      if (x <= nums[mid]) {
        right2 = mid - 1
      } else {
        left2 = mid + 1
      }
    }

    sum += i - left > left2 ? left2 : i - left

    for (j = i - 1; j >= left; j--) {
      nums[j + 1] = nums[j]
    }
    nums[left] = x
  }

  return sum
}

const ins = [1, 5, 6, 2]

const sum = totalCostCal(ins)

console.log(sum)
