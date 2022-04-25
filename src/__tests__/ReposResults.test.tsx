import * as React from "react"
import { screen, waitFor } from "@testing-library/react"
import { renderComponent } from "../mocks/index"
import { ReposResults } from "../components/ReposResults"

import { setupMocks } from "../mocks/index"

const server = setupMocks()

test(`should display names of all repos`, async () => {
  // given
  const username = "allegro"
  const numOfRepos = 3
  const repoName1 = "test_name1"
  const repoName2 = "test_name2"
  const repoName3 = "test_name3"

  server.returnsNoOfUserRepos(username, numOfRepos)
  server.returnsRepositories([
    {
      "id": "testId1",
      "name": repoName1,
      "stargazers_count": 10,
      "html_url": "http://localhost.com/repo1",
    },
    {
      "id": "testId2",
      "name": repoName2,
      "stargazers_count": 15,
      "html_url": "http://localhost.com/repo2",
    },
    {
      "id": "testId3",
      "name": repoName3,
      "stargazers_count": 20,
      "html_url": "http://localhost.com/repo3",
    },
  ])

  // when
  renderComponent(<ReposResults username={username} numOfRepos={numOfRepos} />)
  await waitFor(() => {})
  await waitFor(() =>
    expect(screen.queryByText("spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(screen.getByText(repoName1)).toBeInTheDocument()
  expect(screen.getByText(repoName2)).toBeInTheDocument()
  expect(screen.getByText(repoName3)).toBeInTheDocument()
})
