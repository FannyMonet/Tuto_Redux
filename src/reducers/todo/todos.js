import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../../actions/index'

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            return state.filter((todo, index) => action.index !== index);
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

export default todos;