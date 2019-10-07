import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

const Link = ({ onClick, active, children }) => (
    <Button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </Button>
)

Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default Link;