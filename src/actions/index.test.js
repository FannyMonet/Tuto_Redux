import { addTodo, removeTodo, toggleTodo, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './index';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Learn how to test with jest';
        const expectedAction = {
            type: ADD_TODO,
            text: text
        };
        expect(addTodo(text)).toEqual(expectedAction);
    });

    it('should create an action to remove a todo', () => {
        const id = 0;
        const expectedAction = {
            type: REMOVE_TODO,
            index: id
        };
        expect(removeTodo(id)).toEqual(expectedAction);
    });

    it('should create an action to toggle a todo', () => {
        const id = 0;
        const expectedAction = {
            type: TOGGLE_TODO,
            index: id
        };
        expect(toggleTodo(id)).toEqual(expectedAction);
    })
})