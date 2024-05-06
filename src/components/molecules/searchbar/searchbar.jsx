import React from "react";

//Atoms
import CtaButton from "../../atoms/buttons/ctabutton/ctabutton";

//Assets
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import {XMarkIcon} from '@heroicons/react/24/outline';

export const Searchbar = (props) => {

    return (
        <div className="inputSearch" onClick={(event) => event.stopPropagation()}>
            <input
                className="inputSearch__input"
                placeholder={props.placeholder}
                onClick={(event) => event.stopPropagation()}
                {...props} // Pass through other props as needed
            />
            <CtaButton variant="square" onClick={props.function}>
                {props.icon === "cross" && (
                    <XMarkIcon className="icons" alt="Search"/>
                )}
                {props.icon === "glass" && (
                    <MagnifyingGlassIcon className="icons" alt="Search"/>
                )}
            </CtaButton>
        </div>
    )
};