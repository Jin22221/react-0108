import { useState } from 'react'
// import './TodoList.css'

function TodoApp() {
  //文字輸入框用
  const [inputText, setInputText] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '買衣服', completed: false },
    { id: 3, text: '過年', completed: false },
  ])

  return (
    <>
      <h1>待辦事項8</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            // id
            // 1. 單人使用應用，可用時間日期毫秒整數值，如`Number(new Date())`或`+new Date()`
            // 2. 用uuid或nanoid函式庫(需另外安裝npm)
            // 3. 使用資料庫的id產生機制
            // 4. 其它(例如數字遞增…)，如下範例
            // const ids = data.map((v) => v.id)
            // const maxId = Math.max(...ids)
            // const newId = maxId + 1

            // 先寫出新增的物件
            const newTodo = {
              id: Number(new Date()),
              text: e.target.value,
              completed: false, //預設為未完成
            }

            // 共通三步驟
            // 1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
            // 2. 在新的變數值(陣列/物件)上作處理
            // 3. 設定回原本的狀態中

            //1 //2
            const newTodos = [newTodo, ...todos]

            //3
            setTodos(newTodos)

            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
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
