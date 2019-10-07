import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo'
import { Collection } from 'react-materialize';
import CollectionItem from 'react-materialize/lib/CollectionItem';

const TodoList = ({todos, toggleTodo, removeTodo}) => (
    <Collection>
    {
        todos.map((todo, index) => (
            <CollectionItem key={index}>
                <Todo { ...todo } toggleTodo={() => toggleTodo(index)} removeTodo={() => removeTodo(index)} />
            </CollectionItem>
        ))
    }
    </Collection>
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