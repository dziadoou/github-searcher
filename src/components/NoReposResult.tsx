import React from "react"
import styled from "styled-components/macro"
import { DefaultContainer } from "../styles/DefaultContainer"

function NoReposResult() {
  return (
    <NoReposContainer>
      There are no public repositories available.
    </NoReposContainer>
  )
}

const NoReposContainer = styled(DefaultContainer)`
  width: 500px;
  text-align: center;
  padding: 15px;

  @media (max-width: 568px) {
    width: 90%;
  }
`

export { NoReposResult }
