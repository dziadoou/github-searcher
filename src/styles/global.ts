import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
      font-family: 'Roboto', sans-serif;
      font-family: 'Source Sans Pro', sans-serif;
      color: black;
   }

   body {
      background-position: center;
      background-size: auto;
      background-repeat: no-repeat;
      background: linear-gradient(
         100deg,
         rgba(9, 51, 82, 1),
         rgba(0, 4, 31, 1)
   );  
   }
`
