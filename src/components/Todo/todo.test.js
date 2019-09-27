import React from 'react'
import Todo from './Todo'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        toggleTodo: jest.fn(),
        removeTodo: jest.fn(),
        text: "Todo text",
        completed: true,
    }
    const enzymeWrapper = shallow(<Todo {...props} />);
    return {
        props,
        enzymeWrapper,
    }
}

describe('Todo component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();
        const todoProps = enzymeWrapper.find('li').props();

        expect(enzymeWrapper.find('div').hasClass('todo')).toBe(true)
        expect(enzymeWrapper.find('li').first().text()).toBe('Todo text');
        expect(todoProps.style).toHaveProperty('textDecoration', 'line-through');
        expect(todoProps.style).toHaveProperty('display', 'inline');
        expect(enzymeWrapper.find('button').text()).toBe('X');
      });

      it('should call toggleTodo if we click on the todo', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.toggleTodo.mock.calls.length).toBe(0);
        enzymeWrapper.find('li').simulate('click');
        expect(props.toggleTodo.mock.calls.length).toBe(1);
      });

      it('should call removeTodo if we click on the X button', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.removeTodo.mock.calls.length).toBe(0);
        enzymeWrapper.find('button').simulate('click');
        expect(props.removeTodo.mock.calls.length).toBe(1);
      });
})