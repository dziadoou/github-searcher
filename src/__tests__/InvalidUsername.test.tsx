import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { App } from "../components/App"

test("should return warning when entered has multiple consecutive hyphens", () => {
  // given
  const invalidUsername = "username---ee"

  // when
  render(<App />)
  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))

  // then
  expect(
    screen.getByText(/There was a problem with the username You entered./i),
  ).toBeInTheDocument()
})

test("should return warning when entered username has other characters than alphanumeric characters or hyphens", () => {
  // given
  const invalidUsername = "username*ee"

  // when
  render(<App />)
  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))

  // then
  expect(
    screen.getByText(/There was a problem with the username You entered./i),
  ).toBeInTheDocument()
})

test("should return warning when enterer username has more than 39 characters", () => {
  // given
  const invalidUsername = "test".repeat(10)

  // when
  render(<App />)
  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))

  // then
  expect(
    screen.getByText(/There was a problem with the username You entered./i),
  ).toBeInTheDocument()
})

test("should return warning when enterer username begins with a hyphen", () => {
  // given
  const invalidUsername = "-username"

  // when
  render(<App />)
  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))

  // then
  expect(
    screen.getByText(/There was a problem with the username You entered./i),
  ).toBeInTheDocument()
})

test("should return warning when enterer username ends with a hyphen", () => {
  // given
  const invalidUsername = "username-"

  // when
  render(<App />)
  userEvent.type(screen.getByRole("textbox"), invalidUsername)
  userEvent.click(screen.getByRole("button"))

  // then
  expect(
    screen.getByText(/There was a problem with the username You entered./i),
  ).toBeInTheDocument()
})
