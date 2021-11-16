// var s [][]string

function printSolution(s) {
  console.log('solution is::\n')
  for (const a of s) {
    console.log(a)
  }
  console.log(s.length)
}

function checkExist(binArr, s) {
  isExist = false

  for (const v of s) {
    flag = true
    let i = 0
    for (const w of v) {
      if (w != binArr[i++]) {
        flag = false
        break
      }
    }
    if (flag) {
      isExist = true
      break
    }
  }

  return isExist
}

function Try(binArr, s) {
  // console.log('bin arr: ' + binArr)

  const candidates = []
  for (let i = 0; i < binArr.length; i++) {
    const nextBinArr = binArr.slice()
    if (i == binArr.length - 1) {
      if (nextBinArr[nextBinArr.length - 1] == '1') {
        nextBinArr[nextBinArr.length - 1] = '0'
      } else {
        nextBinArr[nextBinArr.length - 1] = '1'
      }
    } else {
      if (binArr[i + 1] == '1') {
        flag = true
        for (j = i + 2; j < binArr.length; j++) {
          if (binArr[j] == '1') {
            flag = false
          }
        }
        if (flag == true) {
          if (nextBinArr[i] == '1') {
            nextBinArr[i] = '0'
          } else {
            nextBinArr[i] = '1'
          }
        } else {
          continue
        }
      } else {
        continue
      }
    }
    candidates.push(nextBinArr)
  }
  for (const nextBinArr of candidates) {
    if (!checkExist(nextBinArr, s)) {
      s.push(nextBinArr.join(''))
      let isZero = true
      for (let i = 0; i < nextBinArr.length; i++) {
        if (nextBinArr[i] == '1') {
          isZero = false
        }
      }
      if (isZero) {
        printSolution(s)
      } else {
        Try(nextBinArr, s)
      }
    }
  }
}

function calMinTransform(n) {
  const binStr = (n >>> 0).toString(2)
  console.log(binStr)
  const binArr = binStr.split('')
  const s = []
  s.push(binArr)
  Try(binArr, s)

  return 1
}

function main() {
  const n = 333
  console.log('n::', n)
  const res = calMinTransform(n)
  console.log('res::', res)
}
main()
