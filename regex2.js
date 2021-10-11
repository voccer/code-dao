function solve(s, p) {
  let j = 0
  let flag = false
  for (let i = 0; i < p.length; i++) {
    if (flag === true) {
      if (p[i] === '*') {
        if (i === p.length - 1) {
          return true
        }
        continue
      }
      if (p[i] === '?') {
        j++
        continue
      }
      while (s[j] !== p[i]) {
        if (!s[j]) {
          return false
        }
        j++
      }
      while (s[j] === s[j + 1]) {
        j++
      }

      flag = false
    }

    if (s[j] === p[i] || p[i] === '?') {
      j++
      continue
    }
    if (p[i] === '*') {
      if (i === p.length - 1) {
        return true
      }
      flag = true
      continue
    }

    return false
  }
  if (j !== s.length) {
    return false
  }
  return true
}
const s = 'abab'
const p = '*ab'

console.log(solve(s, p))
