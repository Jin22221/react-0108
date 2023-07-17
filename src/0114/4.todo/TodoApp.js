import { useState } from 'react'
import './TodoApp.scss'

function TodoApp() {
  const [inputText, setInputText] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  return (
    <>
      <h1>待辦事項</h1>
      <hr />
      <input
        className="inputText"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputText.trim !== '') {
            // 新增的物件
            const newTodo = { id: Number(new Date()), text: e.target.value }

            // 共通三步驟
            setTodos([newTodo, ...todos])

            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
      <ul className="list">
        {todos.map((v, i) => {
          return (
            <li key={v.id} className={v.completed ? 'completed' : 'active'}>
              <input type="checkbox" checked={v.completed} />
              {v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
