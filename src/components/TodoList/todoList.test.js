import React from 'react'
import TodoList from './TodoList'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Todo from '../Todo/Todo';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        toggleTodo: jest.fn(),
        removeTodo: jest.fn(),
        todos: [
            {
                text: 'todo 1',
                completed: false,
                toggleTodo: jest.fn(),
                removeTodo: jest.fn()
            },
            {
                text: 'todo 2',
                completed: false,
                toggleTodo: jest.fn(),
                removeTodo: jest.fn()
            },
        ]
    }
    const enzymeWrapper = shallow(<TodoList {...props} />);
    return {
        props,
        enzymeWrapper,
    }
}

describe('TodoList component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup();
        const todos = enzymeWrapper.find('ul').children(Todo);

        expect(enzymeWrapper.find('ul'));
        expect(todos.length).toEqual(props.todos.length);
        todos.map((todo, index) => {
            expect(todo.prop('text')).toBe(props.todos[index].text);
            expect(todo.prop('completed')).toBe(props.todos[index].completed);
        });
      });
})