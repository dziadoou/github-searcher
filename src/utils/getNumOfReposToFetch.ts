export function getNumOfReposToFetch(
  numOfRepos: number,
  reposPerPage: number,
  currentPage: number,
) {
  const githubSearchAPILimit = 1000

  let reposPossibleToFetch
  if (numOfRepos > githubSearchAPILimit) {
    reposPossibleToFetch = githubSearchAPILimit
  } else reposPossibleToFetch = numOfRepos

  const numOfPages = Math.ceil(reposPossibleToFetch / reposPerPage)
  let reposToFetch
  if (currentPage === numOfPages - 1) {
    reposToFetch = reposPossibleToFetch - reposPerPage * currentPage
  } else reposToFetch = reposPerPage

  return { numOfPages, reposToFetch }
}
