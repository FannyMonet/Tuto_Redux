import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter/visibilityFilter';
import todos from './todo/todos';

export default combineReducers({
    visibilityFilter,
    todos
});
