import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onClickDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="title">{title}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteTodo}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
