import React from 'react';
import Footer from './Footer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { VisibilityFilters } from '../../actions';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        filter: VisibilityFilters.SHOW_ALL
    };
    
    const enzymeWrapper = shallow(<Footer {...props} />);

    return {
        props, 
        enzymeWrapper
    };
}

describe('Footer component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('p').text()).toBe('Show:');
        expect(enzymeWrapper.find('p').prop('style')).toHaveProperty('display', 'inline');
    })
})