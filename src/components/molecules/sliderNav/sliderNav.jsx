import React from "react";

//Atoms
import FuncButton from "../../atoms/buttons/functionalbutton/funcbutton";

//Assets
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import CtaButton from "../../atoms/buttons/ctabutton/ctabutton";

function SliderNav({ onClickLeft, onClickRight, onClick}) {
    return(
        <div className="slidernav">
            <FuncButton variant="sm" onClick={onClickLeft}>
                <ArrowLeftIcon className="icons" alt="précédent"/>
            </FuncButton>
            <CtaButton onClick={onClick} variant="sm">Découvrir</CtaButton>
            <FuncButton variant="sm" onClick={onClickRight}>
                <ArrowRightIcon className="icons" alt="précédent"/>
            </FuncButton>
        </div>
    )
}

export default SliderNav;