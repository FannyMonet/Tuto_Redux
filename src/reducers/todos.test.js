import todosReducer from './todos';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/index';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(todosReducer(undefined, {})).toEqual([]);
    });

    it('should add a todo', () => {
        expect(todosReducer([], { type: ADD_TODO, text: 'Nouveau todo' }))
        .toEqual([{
            text: 'Nouveau todo',
            completed: false
        }]);

    });

    it('should toggle a todo', () => {
        expect(todosReducer([{ text: 'Coucou', completed: false}], { type: TOGGLE_TODO, index: 0 }))
        .toEqual([{
            text: 'Coucou',
            completed: true
        }]);
    });

    it('should remove a todo', () => {
        expect(todosReducer([{ text: 'Coucou', completed: false}], { type: REMOVE_TODO, index: 0 }))
        .toEqual([]);
    });
});