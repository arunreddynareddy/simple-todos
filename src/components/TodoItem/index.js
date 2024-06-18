import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo} = props
  const {id, title} = todoDetails

  const onClickDeleteTodo = () => {
    deleteTodo(id)
  }

  const [isSaved, setIsSaved] = useState(true)
  const [newTitle, setNewTitle] = useState(title)
  const [isChecked, setIsChecked] = useState(false)

  const onChangeToggleInput = () => setIsChecked(prevState => !prevState)

  const onChangeEditTitle = event => setNewTitle(event.target.value)

  const onClickEditTodo = () => setIsSaved(false)

  const onClickSaveTodo = () => {
    setIsSaved(true)
    saveTodo({id, title: newTitle})
  }

  return (
    <li className="todo-item-container">
      <div className="input-title-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChangeToggleInput}
        />
        {isSaved ? (
          <p className={`title ${isChecked ? 'complete' : ''}`}>{newTitle}</p>
        ) : (
          <input
            type="text"
            className="title-input"
            placeholder="Enter Title"
            value={newTitle}
            onChange={onChangeEditTitle}
          />
        )}
      </div>
      <div className="button-container">
        {isSaved ? (
          <button
            type="button"
            className="delete-btn edit-btn"
            onClick={onClickEditTodo}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="delete-btn save-btn"
            onClick={onClickSaveTodo}
          >
            Save
          </button>
        )}
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDeleteTodo}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
