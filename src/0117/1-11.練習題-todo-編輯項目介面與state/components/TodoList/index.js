import TodoItem from './TodoItem'
import EditForm from './EditForm'

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todos.map((todo, i) => {
          return todo.editing ? (
            <EditForm key={todo.id} />
          ) : (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
