import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({toggleTodo, text, completed}) => (
    <li onClick={toggleTodo}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </li>
);

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;