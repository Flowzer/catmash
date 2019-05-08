import React from 'react';
import CatDetail from '../components/cat-detail';
import '../style/cat-compare.css';
import {Link} from 'react-router-dom';


const CatCompare = (props) => {
    const {catRandom,callback} = props;
    return (
        <div>
            <div>
                <h3>Bataille</h3>
            </div>
            <div className="compare">
                {catRandom.map((cat) => {
                    return (
                        <CatDetail key={cat.id} cat={cat} callback={receiveCallback}/>
                        
                    )
                })}
            </div>
            <footer>
                <Link to="/ranking">Voir le chat le plus mignon</Link>
            </footer>
            
        </div>
    );

    function receiveCallback(cat){
        callback(cat);
    }
}

export default CatCompare;