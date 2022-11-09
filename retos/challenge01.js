const REQUERIDED_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
const USER_FIELD = 'usr:'

/** @param {string} input listo of users */
export const countUsers = (input) => {
  if (typeof input !== 'string') throw new Error('list must be an array')

  /** @type {string[]} usersList */
  const usersList = []
  let user = ''

  input.split('\n').forEach(line => {
    user += line + ' '

    if (line === '' && REQUERIDED_FIELDS.every(field => user.includes(field))) {
      usersList.push(user)
      user = ''
    }

    if (REQUERIDED_FIELDS.every(field => line.includes(field))) {
      usersList.push(line)
      user = ''
    }
  })

  const numUsers = usersList.length
  const lasUser = usersList.pop()

  const username = lasUser
    .split(' ')
    .find((field) => field.startsWith(USER_FIELD))
    .replace(USER_FIELD, '')

  return `${numUsers}${username}`
}
