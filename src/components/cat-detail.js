import React from 'react';

const CatDetail = (props) => {
    const {cat, callback} = props;
    return (
        
        <div className="col-md-6" onClick={handleOnClick}>
            <img alt="cat" className="media-object img-rounded" height="200px" weight="200px" src={cat.url}/>
        </div>
        
    )

    function handleOnClick(){
        callback(cat);
    }
}

export default CatDetail;