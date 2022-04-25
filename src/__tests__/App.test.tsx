import React from "react"
import { App } from "../components/App"
import { screen, waitFor, render } from "@testing-library/react"
import { renderComponent } from "../mocks/index"
import userEvent from "@testing-library/user-event"

import { setupMocks } from "../mocks/index"

const server = setupMocks()

test("renders App properly, with an input component with a placeholder", () => {
  render(<App />)
  const inputElementWithPlaceholder = screen.getByPlaceholderText(/allegro/i)
  expect(inputElementWithPlaceholder).toBeInTheDocument()
})

test(`should show information about not found user`, async () => {
  // given
  const username = "not-existing-user"

  server.returnsUserNotFound(username)

  // when
  renderComponent(<App />)
  userEvent.type(screen.getByRole("textbox"), username)
  userEvent.click(screen.getByRole("button"))
  await waitFor(() =>
    expect(screen.queryByTestId("suspense-spinner")).not.toBeInTheDocument(),
  )

  // then
  expect(
    screen.getByText(/Request failed with status code 404/i),
  ).toBeInTheDocument()
})
