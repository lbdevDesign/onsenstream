import React from "react";

function FuncButton({ children, onClick, variant }) {

    const buttonStyle = variant === "sm" ? "funcbutton small" : "funcbutton";

    return(
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    )
}

export default FuncButton;