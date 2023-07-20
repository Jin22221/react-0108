import { useState } from 'react'

function EditForm({ id, updateTodo, text }) {
  const [inputText, setInputText] = useState(text)
  return (
    <>
      <li>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          autoFocus
        />
        <button
          onClick={() => {
            updateTodo(id, inputText)
          }}
        >
          儲存
        </button>
      </li>
    </>
  )
}

export default EditForm
