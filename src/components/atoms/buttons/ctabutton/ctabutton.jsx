import React from "react";

//Assets

function CtaButton({ variant, children, onClick }) {

    let styleCtaButon;
    if (variant === "square") {
        styleCtaButon = {height: `44px`, width: "44px"}
    } else if (variant === "sm") {
        styleCtaButon = {padding: `8px 16px`}
    } else {
        styleCtaButon = {padding: `12px 24px`};
    }

    return(
        <button className="ctabutton" style={styleCtaButon} onClick={onClick}>
            {children}
        </button>
    )
}

export default CtaButton;