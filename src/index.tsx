import React from "react"
import ReactDOM from "react-dom"
import AppWithQueryProvider from "./components/App"
import GlobalCSS from "./styles/global"

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <AppWithQueryProvider />
  </React.StrictMode>,
  document.getElementById("root"),
)
