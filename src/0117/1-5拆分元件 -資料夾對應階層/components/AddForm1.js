import { useState } from 'react'
function AddForm1({ addTodo }) {
  const [inputText, setInputText] = useState('')
  return (
    <>
      <input
        className="inputText"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputText.trim !== '') {
            // // 新增的物件
            // const newTodo = { id: Number(new Date()), text: e.target.value }

            // // 共通三步驟
            // setTodos([newTodo, ...todos])

            addTodo(e.target.value)

            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
    </>
  )
}

export default AddForm1
