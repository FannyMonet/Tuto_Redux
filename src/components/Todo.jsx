import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({toggleTodo, removeTodo, text, completed}) => (
    <li onClick={toggleTodo}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
        <button onClick={removeTodo}>X</button>
    </li>
);

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;