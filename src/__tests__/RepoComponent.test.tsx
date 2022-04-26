import * as React from "react"
import { screen, waitFor } from "@testing-library/react"
import { renderComponent } from "../mocks/index"
import { RepoComponent } from "../components/RepoComponent"
import userEvent from "@testing-library/user-event"

import { setupMocks } from "../mocks/index"

const server = setupMocks()

test(`should display repo languages, javascript, css, html`, async () => {
  // given
  const username = "test_user"
  const repoName = "test_repo"
  const languages = {
    "javascript": 1111,
    "css": 1111,
    "html": 1111,
  }
  const languagesKeys = Object.keys(languages)
  server.returnsRepositoryLanguages(username, repoName, languages)

  // when
  renderComponent(
    <RepoComponent
      username={username}
      repoName={repoName}
      repoURL="http://testrepo.com"
      starsCount={0}
    />,
  )
  userEvent.click(screen.getByTestId("checkbox"))

  await waitFor(() =>
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(
    screen.getByText(`${languagesKeys[0]}: ${languages[languagesKeys[0]]}b`),
  ).toBeInTheDocument()
  expect(
    screen.getByText(`${languagesKeys[1]}: ${languages[languagesKeys[1]]}b`),
  ).toBeInTheDocument()
  expect(
    screen.getByText(`${languagesKeys[2]}: ${languages[languagesKeys[2]]}b`),
  ).toBeInTheDocument()
})
