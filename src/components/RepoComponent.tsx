import React from "react"
import styled from "styled-components/macro"
import { DefaultContainer } from "../styles/DefaultContainer"
import { Checkbox } from "./Checkbox"
import { Spinner } from "./Spinner"
import { useFetchData } from "../hooks/useFetchData"

interface RepoComponentProps {
  username: string
  repoName: string
  repoURL: string
  starsCount: number
}

function RepoComponent({
  username,
  repoName,
  repoURL,
  starsCount,
}: RepoComponentProps) {
  const [areDetailsOpen, setAreDetailsOpen] = React.useState(false)
  const [didJustRender, setDidJustRender] = React.useState(false)

  function handleDetailsClick() {
    setAreDetailsOpen(!areDetailsOpen)
    setDidJustRender(true)
  }

  const repoDetails = useFetchData(
    `https://api.github.com/repos/${username}/${repoName}/languages`,
    areDetailsOpen,
    `${repoName}`,
    { enable: areDetailsOpen },
  )

  let repoLanguages
  if (repoDetails.data) repoLanguages = Object.keys(repoDetails.data)

  return (
    <ItemContainer>
      <div>
        <a href={repoURL} target="_blank" rel="noreferrer">
          {repoName}
        </a>
      </div>
      <span>{starsCount} ⭐</span>

      {repoDetails.isLoading ? (
        <Spinner />
      ) : (
        <Checkbox
          repoName={repoName}
          areDetailsOpen={areDetailsOpen}
          didJustRender={didJustRender}
          handleDetailsClick={handleDetailsClick}
        />
      )}
      {areDetailsOpen && repoDetails.data && repoLanguages.length > 0 ? (
        <LanguagesContainer>
          {repoLanguages.map((key, index) => (
            <LanguageItem
              key={index}
            >{`${key}: ${repoDetails.data[key]}b`}</LanguageItem>
          ))}
        </LanguagesContainer>
      ) : (
        repoLanguages &&
        repoLanguages.length === 0 && (
          <LanguagesContainer>
            There are no public details available.
          </LanguagesContainer>
        )
      )}
    </ItemContainer>
  )
}

const ItemContainer = styled(DefaultContainer)`
  position: relative;
  border-top-color: rgba(255, 255, 255, 0.15);
  margin: 7px;
  display: inline-grid;
  padding: 13px;
  grid-template-columns: 15fr 76px 30px;
  min-height: 60px;
  grid-gap: 3px;

  > div {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    word-break: break-word;
    hyphens: auto;
    font-size: 18px;
    align-self: start;

    > a {
      text-decoration: none;
    }

    > a:hover {
      text-decoration: underline;
    }
  }

  span {
    align-self: start;
    text-align: right;
    padding-right: 5px;
  }

  @media (max-width: 568px) {
    * {
      font-size: 15px;
    }

    span {
      padding-right: 7px;
      align-self: start;
    }
  }

  @media (min-width: 568) and (max-width: 968px) {
    padding-left: 17px;
    padding-right: 13px;

    span {
      padding-left: 0px;
      padding-right: 26px;
    }
  }
`

const LanguagesContainer = styled.ul`
  margin-top: 7px;
  font-size: 15px;

  @media (max-width: 568px) {
    font-size: 13px;
  }
`

const LanguageItem = styled.li`
  list-style: none;

  @media (max-width: 568px) {
    font-size: 13px;
  }
`

export { RepoComponent }
