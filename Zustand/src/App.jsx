import useTodoStore from './store'
import './App.css'

function App() {
  const { todos, addTodo, removeTodo } = useTodoStore();
  return (
    <>
     <h1>Zustand Store</h1>
     <form
      onSubmit={e => {
        e.preventDefault();
        const todoText = e.target.elements.todoText.value;
        const newTodo = {
          id: Date.now(),
          text: todoText
        };
        addTodo(newTodo);
        e.target.reset();
      }}
     >
      <input type="text" name="todoText" placeholder="Enter todo" required />
      <button type="submit">Add Todo</button>
     </form>
     <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
     </ul>
    </>
  )
}

export default App
