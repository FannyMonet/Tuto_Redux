import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({toggleTodo, removeTodo, text, completed}) => (
    <div className="todo">
        <div onClick={toggleTodo}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                display: 'inline'
            }}>
            {text}
        </div>
        <button className="secondary-content" onClick={removeTodo}>X</button>
    </div>
);

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;