import React from "react";

//Assets
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';

export const Searchbar = (props) => {
    return (
        <div className="inputSearch">
            <input className="inputSearch__input" placeholder={props.placeholder} />
            <button className="inputSearch__button">
                <MagnifyingGlassIcon className='inputSearch__button--icon' alt="Search"/>
            </button>
        </div>
    )
};