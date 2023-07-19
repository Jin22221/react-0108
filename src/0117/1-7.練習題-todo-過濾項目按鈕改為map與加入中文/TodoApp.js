import { useState } from 'react'
import './TodoApp.scss'
import AddForm1 from './components/AddForm1'
import TodoList from './components/TodoList'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  const [filter, setFilter] = useState('All')
  const filterOptions = ['All', 'Active', 'Completed']
  const filterOptionsChinese = ['所有', '進行中', '已完成']

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
      <div className="container">
        <h1>待辦事項</h1>
        <hr />
        <AddForm1 addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
        <hr />
        {filterOptions.map((v, i) => {
          return (
            <button
              key={i}
              className={
                filter === v ? 'filter-btn-active' : 'filter-btn-normal'
              }
              onClick={() => {
                setFilter(v)
              }}
            >
              {filterOptionsChinese[i]}({v})
            </button>
          )
        })}
      </div>
    </>
  )
}

export default TodoApp
