import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import App from "./app"

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)