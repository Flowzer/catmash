import React from 'react';
import '../style/cat-detail.css';

const CatDetail = (props) => {
    const {cat, callback} = props;
    return (
        
        <div id="cat" className="col-md-6" onClick={handleOnClick}>
            <img id ="cat-picture" draggable="false" alt="cat" className="media-object img-rounded" src={cat.url}/>
        </div>
        
    )

    function handleOnClick(){
        callback(cat);
    }
}

export default CatDetail;