import React from 'react';
import CatDetail from '../components/cat-detail';
import './cat-compare.css';
import {Link} from 'react-router-dom';


const CatCompare = (props) => {
    const {catRandom,callback} = props;
    return (
        <div>
            <h3>Bataille</h3>
            {catRandom.map((cat) => {
                return (
                    <CatDetail key={cat.id} cat={cat} callback={receiveCallback}/>
                    
                )
            })}
            <Link to="/ranking">Voir le chat le plus mignon</Link> 
        </div>
    );

    function receiveCallback(cat){
        callback(cat);
    }
}

export default CatCompare;