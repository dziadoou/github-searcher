import React from "react"
import styled from "styled-components/macro"
import SearchIcon from "../assets/search.svg"

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

function Form({ onSubmit }: FormProps) {
  return (
    <FormComponent onSubmit={onSubmit}>
      <Input id="usernameInput" placeholder="Allegro..." type="text" />
      <Button id="submitBtn" type="submit">
        <img src={SearchIcon} alt="search-icon" />
      </Button>
    </FormComponent>
  )
}

const FormComponent = styled.form`
  position: relative;
  width: 400px;
  display: grid;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  justify-self: flex-end;
  padding: 3px 6px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: 568px) {
    max-width: 90%;
  }
`

const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  text-indent: 15px;
  padding-right: 38px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.87),
    rgba(255, 255, 255, 0.6)
  );
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  margin: 5px;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 30px rgba(203, 203, 203, 0.8) inset !important;
    -webkit-box-shadow: 0 0 0 30px rgba(203, 203, 203, 0.8) inset !important;
  }

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(196, 196, 196, 0.9);
  }
`

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  width: 24px;
  height: 24px;
  background-color: inherit;
  transition-duration: 300ms;

  :hover {
    transform: scale(1.05);
  }

  img {
    margin-top: 2px;
    cursor: pointer;
    width: 100%;
  }
`

export { Form }
