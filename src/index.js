import React from "react"
import "bulma/css/bulma.css"
import ReactDOM from "react-dom/client"
import App from "./App"
import {Provider} from "./context/TodoContext"
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)
root.render(<Provider><App/></Provider>)
