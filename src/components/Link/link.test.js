import React from 'react'
import Link from './Link'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        onClick: jest.fn(),
        active: false,
        children: 'All'
    }
    const enzymeWrapper = shallow(<Link {...props} />);
    return {
        props,
        enzymeWrapper,
    }
}

describe('Link component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();
        const linkProps = enzymeWrapper.find('button').props();

        expect(linkProps.style).toHaveProperty('marginLeft', '4px');
        expect(linkProps.disabled).toBe(false);
        expect(enzymeWrapper.find('button').text()).toBe('All');
      });

      it('should call onClick if we click on the link', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.onClick.mock.calls.length).toBe(0);
        enzymeWrapper.find('button').simulate('click');
        expect(props.onClick.mock.calls.length).toBe(1);
      });
})