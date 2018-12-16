import React from 'react';
import {Market} from "./Market";

export const Markets = (props) => {
    const marketsInfo = props.markets.map((market, i) =>
        <Market key={i} market={props.markets[i]}/>);
    return (
        <React.Fragment>
            <ul>{marketsInfo}</ul>
        </React.Fragment>
    );
};
