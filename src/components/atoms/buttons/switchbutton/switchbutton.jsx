import React, { useState } from 'react';

function SwitchButton() {
    const [selectedOption, setSelectedOption] = useState('films');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div className="Switch">
            <button className="Switch__button">Films</button>
            <button className="Switch__button">Séries</button>
        </div>
    )
}

export default SwitchButton;