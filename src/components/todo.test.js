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
        const { enzymeWrapper } = setup()
    
        expect(enzymeWrapper.find('li').first().text()).toBe('Todo text');
        expect(enzymeWrapper.find('li').prop('style')).toHaveProperty('textDecoration', 'line-through');
      });
})