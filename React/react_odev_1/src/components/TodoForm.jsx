import { useState } from 'react'

const TodoForm = ({ todo, setTodo }) => {

    const [todoValue, setTodoValue] = useState('')

    const addTodo = () => {

        if (todoValue === '') window.alert('Enter a todo..')

        else if (todo.includes(todoValue)) window.alert('Todo already exist')

        else {
            setTodo([...todo, todoValue])
            setTodoValue('')
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form action='#' >
                <input className="new-todo" placeholder="What needs to be done?"
                    autoFocus
                    onChange={e => setTodoValue(e.target.value)}
                    value={todoValue}
                />

                <button onClick={(e) => {
                    e.preventDefault()
                    addTodo()
                }}>
                </button>
            </form>
        </header>
    )
}

export default TodoForm