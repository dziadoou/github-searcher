import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Form } from "../components/Form"

test("submitting the form calls onSubmit once", () => {
  //given
  const username = "test-username"
  const handleSubmit = jest.fn(e => e.preventDefault())

  //when
  render(<Form onSubmit={handleSubmit} />)
  userEvent.type(screen.getByRole("textbox"), username)
  userEvent.click(screen.getByRole("button"))

  //then
  expect(handleSubmit).toBeCalledTimes(1)
})
