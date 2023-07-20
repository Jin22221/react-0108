import TodoItem from './TodoItem'
import EditForm from './EditForm'

function TodoList({
  todos,
  toggleCompleted,
  deleteTodo,
  toggleEditing,
  updateTodo,
}) {
  return (
    <>
      <ul className="list">
        {todos.map((todo, i) => {
          return todo.editing ? (
            <EditForm
              key={todo.id}
              updateTodo={updateTodo}
              id={todo.id}
              text={todo.text}
            />
          ) : (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              toggleEditing={toggleEditing}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
