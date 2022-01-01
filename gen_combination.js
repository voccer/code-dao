function checkRes(s) {
  const stack = []
  for (const w of s) {
    if (w === '(') {
      stack.push(w)
    } else {
      const last = stack.pop()
      if (!last) {
        return false
      }
    }
  }
  if (stack.length) {
    return false
  }

  return true
}

function Try(k, res, s) {
  for (const r of ['(', ')']) {
    s[k] = r
    if (k === 2 * n - 1) {
      if (checkRes(s)) {
        res.push(s.join(''))
      }
    } else {
      Try(k + 1, res, s)
    }
  }
}

function genCombinations(n) {
  const res = []
  const s = Array(n * 2)
  s[0] = '('
  Try(1, res, s)

  return res
}

const n = 4
const res = genCombinations(n)

console.log(res)
