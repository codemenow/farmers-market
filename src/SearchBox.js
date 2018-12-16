import React from 'react';

export const SearchBox = (props) => {
    return (
        <input className='search-box' type="text" onChange={props.onsearch}/>
    );
};
