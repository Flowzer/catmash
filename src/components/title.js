import React from 'react';
import {NavLink} from 'react-router-dom';

const Title = () => {
    return (
        <NavLink activeStyle={{ color: 'red' }} to="/">CATMASH</NavLink>
    )

}

export default Title;