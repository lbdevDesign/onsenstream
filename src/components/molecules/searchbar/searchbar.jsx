import React from "react";

//Atoms
import CtaButton from "../../atoms/buttons/ctabutton/ctabutton";

//Assets
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';

export const Searchbar = (props) => {

    const handleClick = () => {
        console.log('button clicked !');
    }

    return (
        <div className="inputSearch">
            <input className="inputSearch__input" placeholder={props.placeholder} />
            <CtaButton variant="square" onClick={handleClick}>
                <MagnifyingGlassIcon className="icons" alt="Search"/>
            </CtaButton>
        </div>
    )
};