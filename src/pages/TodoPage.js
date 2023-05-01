import TodoList from "../components/TodoList"
import InputBar from "../components/InputBar"
import {useContext} from "react"
import TodoContext from "../context/TodoContext"
function TodoPage(){
  const {todos} = useContext(TodoContext)
  return <div>
    <InputBar/>
    <TodoList todos={todos}/>
    </div>
}

export default TodoPage
