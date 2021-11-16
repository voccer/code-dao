function getSubstringIndices(s, words) {
  const result = []
  const pattern = {}
  const wordLength = words[0].length

  for (const word of words) {
    pattern[word] = (pattern[word] || 0) + 1
  }

  for (let i = 0; i < wordLength; i++) {
    let pos = i
    let idxS = pos + wordLength
    let matches = {}
    let cnt = 0

    while (idxS <= s.length) {
      let word = s.slice(idxS - wordLength, idxS)

      if (pattern[word]) {
        matches[word] = (matches[word] || 0) + 1
        cnt++

        while (matches[word] > pattern[word]) {
          matches[s.slice(pos, (pos += wordLength))] -= 1
          cnt--
        }

        if (cnt === words.length) {
          result.push(pos)
        }
      } else {
        matches = {}
        cnt = 0
        pos = idxS
      }

      idxS += wordLength
    }
  }

  return result
}

const s = 'barfoofoobarthefoobarman'
const words = ['foo', 'bar', 'the']

const res = getSubstringIndices(s, words)
console.log('res::', res)
