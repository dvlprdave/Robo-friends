import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{margin: '1em', overflowY: 'scroll', border: '5px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;