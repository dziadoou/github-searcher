import * as React from "react"
import { screen, waitFor } from "@testing-library/react"
import { renderComponent } from "../mocks/index"
import { UserContent } from "../components/UserContent"

import { setupMocks } from "../mocks/index"

const server = setupMocks()

test(`should display the username allegro`, async () => {
  // given
  const username = "allegro"
  server.returnsNoOfUserRepos(username, 10)

  // when
  renderComponent(<UserContent username={username} />)

  await waitFor(() =>
    expect(screen.queryByText("spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(screen.getByText(username)).toBeInTheDocument()
})

test(`should display number of user repositories`, async () => {
  // given
  const numberOfRepos = 20
  server.returnsNoOfUserRepos("allegro", numberOfRepos)

  // when
  renderComponent(<UserContent username="allegro" />)

  await waitFor(() =>
    expect(screen.queryByText("spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(screen.getByText(`Public repos: ${numberOfRepos}`)).toBeInTheDocument()
})

test(`should show information about no repos available`, async () => {
  // given
  const username = "allegro"
  const numOfRepos = 0

  server.returnsNoOfUserRepos(username, numOfRepos)
  server.returnsRepositories([])

  // when
  renderComponent(<UserContent username={username} />)
  await waitFor(() =>
    expect(screen.queryByText("spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(
    screen.getByText(/There are no public repositories available./i),
  ).toBeInTheDocument()
})
