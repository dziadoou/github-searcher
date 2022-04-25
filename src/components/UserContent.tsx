import React from "react"
import styled from "styled-components/macro"
import { UserCard } from "./UserCard"
import { ReposResults } from "./ReposResults"
import { Spinner } from "./Spinner"
import { NoReposResult } from "./NoReposResult"
import { useFetchData } from "../hooks/useFetchData"

interface UserContentProps {
  username: string
}

function UserContent({ username }: UserContentProps) {
  const { isLoading, refetch, data } = useFetchData(
    `https://api.github.com/users/${username}`,
    username,
    "userData",
    { suspense: true, retry: 0 },
  )

  React.useEffect(() => {
    refetch()
  }, [username, refetch])

  const numOfRepos = data?.public_repos

  return (
    <Wrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserCard
          profileURL={data.html_url}
          avatarURL={data.avatar_url}
          username={username}
          numOfRepos={numOfRepos}
        />
      )}
      {data.public_repos > 0 ? (
        <ReposResults username={username} numOfRepos={numOfRepos} />
      ) : (
        <NoReposResult />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { UserContent }
