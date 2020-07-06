import React, { useState } from 'react';
import Level from './Level';

const SelectGame = () => {

    const [gameMethod, setGameMethod] = useState('');
    console.log(gameMethod);
    

    return(
        <section>
            <h2>Select Game</h2>
            
            <div className="buttons">
                <div className="selected" onClick={() => setGameMethod("addition")}>
                    <button>+</button>
                    <p>Addition</p>
                </div>
                <div onClick={() => setGameMethod("subtraction")}>
                    <button>-</button>
                    <p>Subtraction</p>
                </div>
                <div onClick={() => setGameMethod("multiplication")}>
                    <button>&times;</button>
                    <p>Multiplication</p>
                </div>
                <div onClick={() => setGameMethod("division")}>
                    <button>&divide;</button>
                    <p>Division</p>
                </div>
            </div>

            <Level />

        </section>
    )
}

export default SelectGame;