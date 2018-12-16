import React from 'react';

export const ValidationMessage = (props) => {
    return (props.isValid ? null : (
        <div className='validation-msg'>Please enter a valid zip code.</div>)
    );
};
