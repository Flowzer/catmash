import React from 'react'
import CatDetail from '../components/cat-detail'

const CatCompare = (props) => {
    const {catRandom,callback} = props;
    return (
        <div>
            <ul>
            {catRandom.map((cat) => {
                return <CatDetail key={cat.id} image={cat.url} callback={receiveCallback}/>
                })}
            </ul>
        </div>
    );

    function receiveCallback(cat){
        callback(cat);
    }
}

export default CatCompare;