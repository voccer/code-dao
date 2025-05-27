function normalizeEmail(email) {
  const [local, domain] = email.split('@')
  let emailNormalization = ''
  emailNormalization += local
    .substring(
      0,
      (plusIndex = local.indexOf('+')) === -1 ? local.length : plusIndex
    )
    .replace(/\./g, '')
  
  emailNormalization += '@'
  emailNormalization += domain

  return emailNormalization
}

function countDiffEmail(emails) {
  const emailsSet = new Set()
  for (const email of emails) {
    const emailNormalization = normalizeEmail(email)
    console.log(emailNormalization);
    emailsSet.add(emailNormalization)
  }
  
  return emailsSet.size
}

const emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
]

const diffEmailCnt = countDiffEmail(emails)
console.log(diffEmailCnt)
