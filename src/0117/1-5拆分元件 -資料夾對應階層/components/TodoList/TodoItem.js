function TodoItem({ todo, toggleCompleted, deleteTodo }) {
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
