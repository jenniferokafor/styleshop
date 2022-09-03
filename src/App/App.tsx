import React from "react"
import { BrowserRouter } from "react-router-dom"
import Views from "../routes/Views"
import "./app.scss"

function App() {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  )
}

export default App
