import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/title.css';

const Title = () => {
    return (
        <header>
            <NavLink id="title" className="col-md-12" to="/">Catmash</NavLink>
        </header>
        
    )

}

export default Title;