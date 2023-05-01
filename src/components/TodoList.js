import TodoShow from "./TodoShow"
function TodoList({todos}){
  const renderTodos = todos.map((todo) => {
    return <TodoShow key={Math.floor(Math.random()*9999)} todo={todo}/>
  })

  return <div className="container">{renderTodos}</div>
}

export default TodoList
