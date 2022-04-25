import styled from "styled-components"

export const DefaultContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.87),
    rgba(255, 255, 255, 0.6)
  );
  backdrop-filter: blur(5px);
  --webkit-backdrop-filter: 5px;

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(236, 236, 236, 0.89);
  }
`
