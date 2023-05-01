import {useState, useEffect, createContext} from "react"
const TodoContext = createContext()

function Provider({children}){
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const todosStart = [
      {
        id: 1,
        name: "Pasear al perro"
      },
      {
        id: 2,
        name:"Visitar la torre eiffel"
      }
    ]
    setTodos(todosStart)
  },[])

  const createTodo = (todo) => {
    console.log(todo)
    setTodos([...todos, todo])
  }

  const editTodoById = (id, name) => {
    const updatedTodos = todos.map((todo)=>{
      if (todo.id === id){
        return {...todo, name}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
        return todo.id !== id
    })
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  const valueToShare={
    todos,
    createTodo,
    deleteTodoById,
    editTodoById
  }
  return <TodoContext.Provider value={valueToShare}>
    {children}
  </TodoContext.Provider>
}

export {Provider}
export default TodoContext
