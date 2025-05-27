function solve(s, p) {
  if(p.includes)
  let cut = p
    .split('*')
    .map((v) => v.split(''))
    .filter((v) => v.length)

  for (let i = 1; i < cut.length; i++) {
    while (cut[i][0] === cut[i - 1][cut[i - 1].length - 1]) {
      cut[i].splice(0, 1)
    }
  }
  cut = cut.join('')

  const sh = s.split('')
  for (let i = 1; i < sh.length; i++) {
    if (sh[i - 1] === sh[i]) {
      sh.splice(i, 1)
      i--
    }
  }
  if (cut.includes(sh.join(''))) {
    return true
  } else {
    return false
  }
}

const s = 'ab'
const p = '.*'

const isMatched = solve(s, p)
console.log(isMatched)
