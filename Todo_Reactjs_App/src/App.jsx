import { useState ,useEffect} from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

const [todos,setTodos] =useState([]) 
const [todoValue, settodoValue] = useState('')
function handleAddTodos(newtodo){
  const newTodoList = [...todos,newtodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}
function persistData(newlist){
  localStorage.setItem('todos',JSON.stringify({todos:newlist}))
}
function handleDeleteTodo(index){
const newTodoList = todos.filter((todo,todoindex)=>{
  return todoindex !== index
})
persistData(newTodoList)
setTodos(newTodoList)
}
function handleEditTodo(index){
const valueToBeEdited = todos[index]
settodoValue(valueToBeEdited)
handleDeleteTodo(index)
}
useEffect(() => {
  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
}, [])

  return (
    <>
      <TodoInput todoValue={todoValue} settodoValue={settodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
