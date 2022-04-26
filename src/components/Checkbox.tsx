import React from "react"
import styled from "styled-components/macro"
import DetailsIcon from "../assets/DetailsIcon.svg"

interface CheckboxProps {
  repoName: string
  areDetailsOpen: boolean
  didJustRender: boolean
  handleDetailsClick: () => void
}

function Checkbox({
  repoName,
  areDetailsOpen,
  didJustRender,
  handleDetailsClick,
}: CheckboxProps) {
  return (
    <CheckboxContainer isChecked={areDetailsOpen} didJustRender={didJustRender}>
      <input
        type="checkbox"
        id={`${repoName}`}
        onClick={handleDetailsClick}
        data-testid="checkbox"
      />
      <label htmlFor={`${repoName}`}>
        <img alt="arrow-icon" src={DetailsIcon} />
      </label>
    </CheckboxContainer>
  )
}

interface CheckboxContainerProps {
  isChecked: boolean
  didJustRender: boolean
}

const CheckboxContainer = styled.div<CheckboxContainerProps>`
  align-self: start;
  padding-top: 4px;
  padding-right: 8px;

  input {
    display: none;
  }

  label {
    width: 20px;
    height: 20px;
    cursor: pointer;

    img {
      width: 100%;
      animation: ${p =>
        p.isChecked ? "spinDown 0.3s" : p.didJustRender ? "spinUp 0.3s" : ""};
      transform: ${p =>
        p.isChecked ? "rotate(-90deg)" : p.didJustRender ? "rotate(0deg)" : ""};
    }
  }

  @keyframes spinDown {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-90deg);
    }
  }

  @keyframes spinUp {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

export { Checkbox }
