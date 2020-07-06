import React from 'react';

const SelectGame = () => {

    return(
        <section>
            <h2>Select Game</h2>
            
            <div className="buttons">
                <div>
                    <button>+</button>
                    <p>Addition</p>
                </div>
                <div>
                    <button>-</button>
                    <p>Subtraction</p>
                </div>
                <div>
                    <button>&times;</button>
                    <p>Multiplication</p>
                </div>
                <div>
                    <button>&divide;</button>
                    <p>Division</p>
                </div>
            </div>

        </section>
    )
}

export default SelectGame;