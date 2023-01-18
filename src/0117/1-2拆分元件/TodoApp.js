import { useState } from 'react'
import AddForm from './addForm'
// import './TodoList.css'

function TodoApp() {
  //文字輸入框用
  const [inputText, setInputText] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '買衣服', completed: false },
    { id: 3, text: '過年', completed: false },
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
    }

    setTodos([newTodo, ...todos])

    const toggleCompleted = (id) => {
      const newTodos = todos.map((v) => {
        return { ...v }
      })

      const index = todos.findIndex((v, i) => {
        return v.id === id
      })

      console.log(index !== -1, 'index')
      if (index !== -1) {
        newTodos[index].completed = !newTodos[index].completed

        setTodos(newTodos)
      }
    }
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })
  }

  return (
    <>
      <h1>待辦事項8</h1>
      <AddForm addTodo={addTodo} />
      <hr />
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id} className={v.completed ? 'complete' : 'active'}>
              <input type="checkbox" checkd={v.completed} />
              {v.text}
              <button
                onClick={(e) => {
                  const newTodos = todos.filter((v2, i2) => {
                    return v2.id !== v.id
                  })
                  setTodos(newTodos)
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
