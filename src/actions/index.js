/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}  

/*
 * action creators
 */
const addTodo = text =>  ({type: ADD_TODO, text});
const removeTodo = index => ({type: REMOVE_TODO, index})
const toggleTodo = index => ({type: TOGGLE_TODO, index});
const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});

export {addTodo, removeTodo, toggleTodo, setVisibilityFilter};