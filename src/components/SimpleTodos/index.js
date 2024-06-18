import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'
import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    titleInput: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodoList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: filteredTodoList})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  digitsOnly = string => [...string].every(c => '0123456789'.includes(c))

  onClickAddTodo = () => {
    const {titleInput} = this.state
    const inputList = titleInput.split(' ')
    const noOfTodos = inputList[inputList.length - 1]

    if (this.digitsOnly(noOfTodos) && inputList.length > 1) {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= noOfTodos; i++) {
        const newTodo = {
          id: uuidv4(),
          title: titleInput,
        }
        this.setState(prevState => ({
          todosList: [...prevState.todosList, newTodo],
        }))
      }
      this.setState({titleInput: ''})
    } else if (titleInput !== '') {
      const newTodo = {
        id: uuidv4(),
        title: titleInput,
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
        titleInput: '',
      }))
    }
  }

  saveTodo = todo => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(item =>
        item.id === todo.id ? todo : item,
      ),
    }))
  }

  renderTodoInputField = () => {
    const {titleInput} = this.state

    return (
      <div className="input-add-button-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter Todo"
          value={titleInput}
          onChange={this.onChangeTitleInput}
        />
        <button
          type="button"
          className="add-button"
          onClick={this.onClickAddTodo}
        >
          Add
        </button>
      </div>
    )
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="simple-todos-container">
        <div className="simple-todos-card">
          <h1 className="main-heading">Simple Todos</h1>
          {this.renderTodoInputField()}
          <ul className="todos-list-container">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
