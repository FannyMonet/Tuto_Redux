import { TOGGLE_TODO, ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilter } from './actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilter;

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                return index === action.index ? {
                    ...todo,
                    completed: !todo.completed
                } :
                todo
            });
        default:
            return state;

    }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;
