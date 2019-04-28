import React from 'react'

const CatDetail = (props) => {
    const {image, callback} = props;
    return (
        <li className="list-group-item" onClick={handleOnClick}>
            <div className="media">
                <img alt="cat" className="media-object img-rounded" height="100px" weight="100px" src={image}/>
            </div>
        </li>
    )

    function handleOnClick(){
        callback(image);
    }
}

export default CatDetail;