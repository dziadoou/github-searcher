import React from "react"
import styled from "styled-components/macro"
import { DefaultContainer } from "../styles/DefaultContainer"

interface ErrorFallbackProps {
  errorMessage: string
  handleReset: () => void
}

function ErrorFallback({ errorMessage, handleReset }: ErrorFallbackProps) {
  return (
    <Container>
      <div>{errorMessage}</div>
      <div>
        <Button type="button" onClick={handleReset}>
          Try again
        </Button>
      </div>
    </Container>
  )
}

const Container = styled(DefaultContainer)`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  background-color: #ffffff9a;
  margin-top: 10px;
  padding: 5px;
  cursor: pointer;
  transition-duration: 300ms;

  :hover {
    background-color: #ffffff81;
  }
`

export { ErrorFallback }
