function calMinTransform(n) {
  const binStr = (n >>> 0).toString(2)
  let res = 0
  let flag = true
  for (let i in binStr) {
    if (binStr[i] === '1') {
      const x = 2 ** (binStr.length - i) - 1
      if (flag) {
        console.log(x)
        res += x
        flag = false
      } else {
        flag = true

        res -= x
      }
    }
  }
  return res
}

const n = 333
const ret = calMinTransform(n)
