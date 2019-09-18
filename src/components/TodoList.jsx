import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({todos, toggleTodo, removeTodo}) => (
    <ul>
    {
        todos.map((todo, index) => (
            <Todo { ...todo } key={index} toggleTodo={() => toggleTodo(index)} removeTodo={() => removeTodo(index)} />
        ))
    }
    </ul>
)

TodoList.propTypes= {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList;