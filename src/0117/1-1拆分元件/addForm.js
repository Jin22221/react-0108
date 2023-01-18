function AddForm({ inputText, setinputText, addTodo }) {
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setinputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            //新增todo
            addTodo(e.target.value)

            //清空文字輸入框
            setinputText('')
          }
        }}
      />
    </>
  )
}

export default AddForm
