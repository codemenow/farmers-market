import React from 'react';

export const Market = (props) => {
    return (
        <div className='market-info'>
            <div className='market-id'>{props.market.id}</div>
            <div className='market-name'>{props.market.marketname}</div>
        </div>
    );
};
