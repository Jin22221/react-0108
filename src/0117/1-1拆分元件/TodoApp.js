import { useState } from 'react'
import './TodoApp.scss'


function TodoApp() {
  const [inputText, setInputText] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
    }

    setTodos([newTodo, ...todos])
  }

  const toggleCompleted = (id) => {
    const newTodos = todos.map((v) => {
      if (id === v.id) return { ...v, completed: !v.completed }
      return { ...v }
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      // console.log(`v.id= ${v.id}`, `id= ${id}`)
      return v.id !== id
    })

    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辦事項</h1>
      <hr />
      <addForm
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />
      <ul className="list">
        {todos.map((v, i) => {
          return (
            <li key={v.id} className={v.completed ? 'completed' : 'active'}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  toggleCompleted(v.id)
                }}
              />
              {v.text}
              <button
                className="delete"
                onClick={() => {
                  //   const newTodos = todos.filter((v2) => {
                  //     console.log(`v.id= ${v.id}   `, `v2.id= ${v2.id}`)
                  //     return v.id !== v2.id
                  //   })
                  //   setTodos(newTodos)
                  deleteTodo(v.id)
                }}
              >
                x
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
