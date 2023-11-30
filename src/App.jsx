
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './assets/features/todosReducer'

function App() {
const todos = useSelector((state) => state.todos)
const [text, setText] = useState('')

const dispatch = useDispatch()

const handleChange = (e) => {
setText(e.target.value)
} ; 

const handleSubmit = (e) => {
e.preventDefault();
dispatch(addTodo({ id: Date.now() , text}))
setText('')
}

const handleRemove = (id) => {
  dispatch(removeTodo(id))
}
  return <div>
    <form onSubmit={handleSubmit} >
      <input type="text" value={text} onChange={handleChange} />
      <button type='submit'>add</button>
    </form>
    <ul>
   {todos.map((todos)=> {
    return <li>{todos.text}<button onClick={()=>handleRemove(todos.id)}>x</button></li>
   })}
    </ul>
  </div>
    
  
}

export default App
