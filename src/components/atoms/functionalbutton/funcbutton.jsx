import React from "react";

function FuncButton({ children, onClick }) {
    return(
        <button className="funcbutton" onClick={onClick}>
            {children}
        </button>
    )
}

export default FuncButton;