import React from "react";

function IndexButton({ onClick, ...props}) {
    console.log(props.data);
    return(
        <button key={props.key} className="indexbutton"
        onClick={onClick}>
            <div className={`indexbutton--icon${props.index === props.data ? '--active' : '' }`}></div>
        </button>
    )
}

export default IndexButton;