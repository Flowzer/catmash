import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/title.css';

const Title = () => {
    return (
            <NavLink id="title" className="col-md-12" to="/">Catmash</NavLink>
        
    )

}

export default Title;