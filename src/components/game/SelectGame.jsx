import React from 'react';
import Level from './Level';
import { useHistory } from 'react-router-dom';


const SelectGame = ({ level, setLevel, gameMethod, setGameMethod }) => {

    const history = useHistory();

    let renderRedirect = () => {
        return history.push(`/play`);
    }

    return(
        <section>
            <h2>Select Game</h2>
            
            <div className="buttons">
                <div className="selected" onClick={() => setGameMethod("addition")}>
                    <button disabled>+</button>
                    <p>Addition</p>
                </div>
                <div onClick={() => setGameMethod("subtraction")}>
                    <button disabled>-</button>
                    <p>Subtraction</p>
                </div>
                <div onClick={() => setGameMethod("multiplication")}>
                    <button>&times;</button>
                    <p>Multiplication</p>
                </div>
                <div onClick={() => setGameMethod("division")}>
                    <button disabled>&divide;</button>
                    <p>Division</p>
                </div>
            </div>

            <Level level={level} setLevel={setLevel} />

            <div className="start">

                <button 
                    disabled={!level || !gameMethod}
                    onClick={renderRedirect}>
                    Start
                </button>
            </div>

        </section>
    )
}

export default SelectGame;