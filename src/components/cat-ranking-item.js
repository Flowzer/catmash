import React from 'react';

const CatRankingItem = (props) => {
    const {cat} = props;

    return (
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-rounded" height="100px" weight="100px" src={cat.url}/>
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">Votes : {cat.count}</h5>
                </div>
            </div>
        </li>
    )
}

export default CatRankingItem;