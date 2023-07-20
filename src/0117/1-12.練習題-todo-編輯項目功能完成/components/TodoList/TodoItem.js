function TodoItem({ todo, toggleCompleted, deleteTodo, toggleEditing }) {
  const { id, completed, text } = todo
  return (
    <>
      <li className={completed ? 'completed' : 'active'}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id)
          }}
        />
        {text}
        <button
          onClick={() => {
            toggleEditing(id)
          }}
        >
          編輯
        </button>
        <button
          className="delete"
          onClick={() => {
            //   const newTodos = todos.filter((v2) => {
            //     console.log(`v.id= ${v.id}   `, `v2.id= ${v2.id}`)
            //     return v.id !== v2.id
            //   })
            //   setTodos(newTodos)
            deleteTodo(id)
          }}
        >
          x
        </button>
      </li>
    </>
  )
}

export default TodoItem
