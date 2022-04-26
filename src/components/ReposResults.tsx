import React from "react"
import styled from "styled-components/macro"
import { Pagination } from "./Pagination"
import { RepoComponent } from "./RepoComponent"
import { getNumOfReposToFetch } from "../utils/getNumOfReposToFetch"
import { useFetchData } from "../hooks/useFetchData"

interface ReposResultsProps {
  username: string
  numOfRepos: number
  reposPerPage: number
}

function ReposResults({
  username,
  numOfRepos,
  reposPerPage = 10,
}: ReposResultsProps) {
  const [currentPage, setCurrentPage] = React.useState(0)

  // const reposPerPage = 10
  const { numOfPages, reposToFetch } = getNumOfReposToFetch(
    numOfRepos,
    reposPerPage,
    currentPage,
  )

  const reposResults = useFetchData(
    `https://api.github.com/search/repositories?q=is:public+fork:true+user:${username}+sort:stars+&per_page=${reposToFetch}&page=${
      currentPage + 1
    }`,
    currentPage,
    `${username}`,
    { enabled: !!numOfRepos, keepPreviousData: true, staleTime: 5000 },
  )

  function onPageChange(pageNum) {
    setCurrentPage(pageNum.selected)
  }

  if (!reposResults.data || reposResults.isLoading) return null

  return (
    <ResultsContainer>
      <Results>
        {reposResults.data.items.map(repo => {
          const { id, name, html_url, stargazers_count } = repo
          return (
            <RepoComponent
              key={id}
              username={username}
              repoName={name}
              repoURL={html_url}
              starsCount={stargazers_count}
            />
          )
        })}
      </Results>
      {numOfRepos > reposPerPage && (
        <Pagination
          numberOfPages={numOfPages}
          onPageChange={onPageChange}
          isPageLoading={reposResults.isFetching}
        />
      )}
    </ResultsContainer>
  )
}

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 568px) {
    width: 90%;
    margin-bottom: 50px;
  }
`

const Results = styled.ul`
  width: 500px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 568px) {
    width: 90%;
    margin-bottom: 50px;
  }
`

export { ReposResults }
