import githubUsernameRegex from 'github-username-regex'

function validateUsername(username: string) {
  return githubUsernameRegex.test(username)
}

export {validateUsername}
