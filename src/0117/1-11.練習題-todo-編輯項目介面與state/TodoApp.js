import { useState } from 'react'
import './TodoApp.scss'
import AddForm1 from './components/AddForm1'
import TodoList from './components/TodoList'
import FilterButtonsGroup from './components/FilterButtonsGroup'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, editing: true },
    { id: 2, text: '學react', completed: true, editing: false },
  ])

  const [filter, setFilter] = useState('All')
  // const filterOptions = ['All', 'Active', 'Completed']
  // const filterOptionsChinese = ['所有', '進行中', '已完成']

  const getFilterTodos = (todos) => {
    // if (filter === 'All') return todos

    // if (filter === 'Active')
    //   return todos.filter((v, i) => {
    //     return v.completed === false
    //   })

    // if (filter === 'Completed')
    //   return todos.filter((v, i) => {
    //     return v.completed === true
    //   })
    switch (filter) {
      case 'Active':
        return todos.filter((v, i) => {
          return !v.completed
        })
      case 'Completed':
        return todos.filter((v, i) => {
          return v.completed
        })
      case 'All':
      default:
        return todos
    }
  }

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
        <AddForm1 addTodo={addTodo} />
        <hr />
        <TodoList
          todos={getFilterTodos(todos)}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
        <hr />
        <FilterButtonsGroup filter={filter} setFilter={setFilter} />
      </div>
    </>
  )
}

export default TodoApp
