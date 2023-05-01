import { useContext, useState } from "react"
import TodoContext from "../context/TodoContext"
function TodoEdit({todo}){
  const [value, setValue] = useState('')
  const {editTodoById} = useContext(TodoContext)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return <form className="is-flex" onSubmit={()=>editTodoById(todo.id, value)}>
    <input className="input is-success" type="text" onChange={handleChange} value={value}/>
    <button className="button is-success">Save</button>
  </form>
}

export default TodoEdit
