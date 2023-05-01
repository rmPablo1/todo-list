import {useState, useContext} from "react"
import TodoContext from "../context/TodoContext"
function InputBar(){
  const {createTodo} = useContext(TodoContext)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    value !== '' && createTodo({name: value, id: Math.floor(Math.random()*9999)})
    setValue('')
  }

  return  <div className="container">
    <form className="is-flex mb-5"onSubmit={handleSubmit}>
    <input className="input is-success" type="text" onChange={handleChange} value={value}/>
    <button className="button is-primary">SAVE</button>
  </form>
  </div>
}

export default InputBar
