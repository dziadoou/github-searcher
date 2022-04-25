import React from "react"
import styled from "styled-components/macro"

function InvalidUsername() {
  return (
    <InvalidUsernameContainer>
      <p>
        There was a problem with the username You entered. Make sure that it
        meets the following requirements:
      </p>
      <ValidationTipLi>Maximum length is 39 characters.</ValidationTipLi>
      <ValidationTipLi>
        Github username may only contain alphanumeric characters or hyphens.
      </ValidationTipLi>
      <ValidationTipLi>
        Github username cannot have multiple consecutive hyphens.
      </ValidationTipLi>
      <ValidationTipLi>
        Github username cannot begin or end with a hyphen.
      </ValidationTipLi>
    </InvalidUsernameContainer>
  )
}

const InvalidUsernameContainer = styled.ul`
  font-size: 18px;
  width: 800px;
  list-style: circle;
  border-radius: 10px;
  border-top-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 10px 25px 10px 50px;

  @supports (backdrop-filter: blur(5px)) {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.87),
      rgba(255, 255, 255, 0.6)
    );
    backdrop-filter: blur(5px);
  }

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(196, 196, 196, 0.9);
  }

  @media (max-width: 968px) {
    width: 80%;
  }
`

const ValidationTipLi = styled.li`
  font-size: 18px;
`

export { InvalidUsernameContainer, ValidationTipLi }

export { InvalidUsername }
