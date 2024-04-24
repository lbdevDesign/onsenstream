import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'

//Atoms
import FuncButton from "../../atoms/buttons/functionalbutton/funcbutton";
import IndexButton from "../../atoms/buttons/indexbutton/indexbutton";

//Assets
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/24/outline';


function CarouselNav({ data, currentIndex, updateIndex }) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    return(
        <div className="carouselindex">
            {isDesktop && (
                <FuncButton onClick={() => { updateIndex(currentIndex - 1) }}>
                    <ArrowLeftIcon className="icons" alt="Précédent" />
                </FuncButton> 
            )}
            <div className="carouselindex__indicator">
                {data.map((item, index) => {
                    return (
                        <IndexButton 
                            key={item.id} 
                            onClick={() => { updateIndex(index)}} 
                            index={index} 
                            data={currentIndex}
                        />
                    )
                })}
            </div>
            {isDesktop && (
                <FuncButton onClick={() => { updateIndex(currentIndex + 1) }}>
                    <ArrowRightIcon className="icons" alt="Précédent" />
                </FuncButton>
            )}
        </div>
    )
}

export default CarouselNav;