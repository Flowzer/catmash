import React from 'react';
import CatRankingItem from '../components/cat-ranking-item';

const CatRanking = (props) => {
    const {cat} = props;

    return (
        <div>
            <h3>Classement</h3>
            <ul>
                {cat.sort(compare).map((cat) => {
                return <CatRankingItem key={cat.id} cat={cat}/>
                })}
            </ul>
        </div>
    );

    function compare(a, b) {
        if (parseInt(a.id) > parseInt(b.id))
           return -1;
        if (parseInt(a.id) < parseInt(b.id))
           return 1;
        return 0;
    };

}

export default CatRanking;