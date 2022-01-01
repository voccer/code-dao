
function additiveSolve(str) {
  if (str.startsWith('0')) {
    return false
  }
  let strArr = []
  strArr.push(str[0])
  let cnt = 0
  for (let i = 1; i < str.length; i++) {
    if (str[i] === '0') {
      strArr.push(str[i])
    } else {
      strArr.push('#')
      strArr.push(str[i])
      cnt += 1
    }
  }
  
  
  

  console.log(strArr)
}
const str = '199100199'

additiveSolve(str)
