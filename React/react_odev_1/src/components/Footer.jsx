import React from 'react'

const Footer = ({ todo, setTodo }) => {

    const clearAll = () => {
        setTodo(todo.filter(item => !item));
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong> {todo.length} </strong>
                items left
            </span>
            {/* <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul> */}

            <button className="clear-all" onClick={() => clearAll()} >
                Clear all
            </button>
        </footer>
    )
}

export default Footer