import { useSelector, useDispatch } from 'react-redux'
import {addTodo, deletetodo} from './redux/slices/todoSlice.jsx'
import './App.css'

function App() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deletetodo(id))
  }


  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        const todo= e.target.elements.todo.value
        handleAddTodo({id: self.crypto.randomUUID(), title: todo})
        e.target.reset()
      
      }}>
        <input type="text" name="todo" />
        <button>Add Todo</button>
      </form>



      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
