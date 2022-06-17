import React from 'react';


const CmnButton = (props) => {
    return (
        <button name={props.name} id={props.id} className={`btn_theme ${props.className}`} onClick={props.onClick}>
            {props.title}
        </button>
    );

}


export default CmnButton;