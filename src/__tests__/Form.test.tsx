import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Form } from "../components/Form"

test("submitting the form calls onSubmit once", () => {
  const handleSubmit = jest.fn(e => e.preventDefault())
  render(<Form onSubmit={handleSubmit} />)
  const username = "basicusername"
  const invalidUsername = "username---ee"

  userEvent.type(screen.getByRole("textbox"), username)
  userEvent.click(screen.getByRole("button"))
  expect(handleSubmit).toBeCalledTimes(1)

  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))
  expect(handleSubmit).toBeCalledTimes(2)
})
