import React from 'react';
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions/index'

const Footer = () => (
    <>
        <p style={{display: 'inline'}}>
            Show: 
        </p>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </>
);

export default Footer;
