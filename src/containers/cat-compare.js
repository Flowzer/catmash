import React from 'react'
import CatDetail from '../components/cat-detail'
import './cat-compare.css';


const CatCompare = (props) => {
    const {catRandom,callback} = props;
    return (
        <div>
            {catRandom.map((cat) => {
                return (
                    <CatDetail key={cat.id} cat={cat} callback={receiveCallback}/>  
                )
            })}
        </div>
    );

    function receiveCallback(cat){
        callback(cat);
    }
}

export default CatCompare;