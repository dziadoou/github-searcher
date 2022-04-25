import styled from "styled-components/macro"

const Spinner = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(0, 0, 0, 1);
  border-top-color: inherit;
  animation: rotate 1s infinite linear;
  background-color: inherit;
  margin: 3px;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`

const SuspenseSpinner = styled(Spinner)`
  width: 50px;
  top: 15%;
  height: 50px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border: 3px solid rgba(0, 4, 31, 1);
  border-top-color: white;

  @media (max-width: 568px) {
    top: 20%;
  }
`

export { Spinner, SuspenseSpinner }
