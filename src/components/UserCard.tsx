import React from "react"
import styled from "styled-components/macro"
import { DefaultContainer } from "../styles/DefaultContainer"

interface UserDataProps {
  profileURL: string
  avatarURL: string
  username: string
  numOfRepos: number
}

function UserCard({
  profileURL,
  avatarURL,
  username,
  numOfRepos,
}: UserDataProps) {
  return (
    <Container>
      <a href={profileURL} target="_blank" rel="noreferrer">
        <img src={avatarURL} alt="user-avatar" />
      </a>
      <div>
        <h1>{username}</h1>
        <p>Public repos: {numOfRepos}</p>
      </div>
    </Container>
  )
}

const Container = styled(DefaultContainer)`
  border: none;
  margin: 7px;
  margin-bottom: 20px;
  height: fit-content;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-indent: 15px;

  a {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 5px;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-indent: 0px;

    h1 {
      font-size: 20px;
      margin-left: 3px;
      margin-right: 3px;
      overflow-wrap: break-word;
      margin-left: 10%;
      width: 80%;
    }

    p {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
`

export { UserCard }
