import { useContext } from "react"
import TodoContext from "../context/TodoContext"
import { useState } from "react"
import TodoEdit from "./TodoEdit"
function TodoShow({todo}){
  const [showEdit, setShowEdit] = useState(false)
  const { deleteTodoById } = useContext(TodoContext)
  let content = <div className="is-flex box"><p className="is-flex-grow-1">{todo.name}</p><button className="button is-danger"onClick={()=> deleteTodoById(todo.id)}>DELETE</button><button className="button is-secondary"onClick={()=>setShowEdit(true)}>EDIT</button></div>
  if (showEdit) {
    content = <TodoEdit todo={todo}/>
  }
  return <div>{content}</div>
}

export default TodoShow
