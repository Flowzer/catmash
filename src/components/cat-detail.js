import React from 'react'

const CatDetail = (props) => {
    const {image, callback} = props;
    return (
        
        <div className="col-md-6" onClick={handleOnClick}>
            <img alt="cat" className="media-object img-rounded" height="200px" weight="200px" src={image}/>
        </div>
        
    )

    function handleOnClick(){
        callback(image);
    }
}

export default CatDetail;