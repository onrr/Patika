import { useState } from 'react'

const TodoList = ({ todo, setTodo }) => {

    const [isActive, setIsActive] = useState(false)

    const selectTodo = (event) => {
        event.currentTarget.classList.toggle('completed' ? 'completed' : 'active')
    };

    const checkedAll = () => {
        const isCompleted = !isActive;
        setIsActive(isCompleted)
    };
    
    const deleteTodo = (id) => {
        setTodo(todo.filter((todo, index) => index !== id))
    }


    return (
        <section className="main">
            <button
                id="toggleAll"
                type="checkbox"
                className="toggle-all"
                onClick={(event) => checkedAll(event)}
            />
            <label htmlFor="toggleAll">Mark all as complete</label>
            <ul className="todo-list">
                {
                    Array.isArray(todo) ? todo.map((todo, id) => (
                        <li key={id} className={isActive ? "completed" : "active"} onClick={selectTodo} >
                            <div className="view">
                                {/* <input className="toggle" type="checkbox" /> */}
                                <label>{todo}</label>
                                <button className="destroy" onClick={() => deleteTodo(id)} ></button>
                            </div>
                        </li>
                    )) : null
                }

            </ul>
        </section>
    )
}

export default TodoList