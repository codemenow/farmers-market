import React from 'react';

export const SearchResultInfo = (props) => {
    if(props.marketCount){
        return (
            <div className='search-info'>
                <span>Showing {props.marketCount} Markets in the area: {props.zipcode}</span>
            </div>
        );
    } else {
        return null;
    }
};
