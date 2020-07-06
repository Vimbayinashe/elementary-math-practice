import React, { useState } from 'react';
import './Level.css';

const Level = () => {

    const [level, setLevel] = useState('');
    console.log(level);
    

    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let JSXList = numbers.map( number => (
        <button key={number} onClick={()=>setLevel(number)}> { number } </button>))

    return(
        <section>
            <h2>Choose Level</h2>

            <article className="level-buttons">
                {JSXList}

            </article>
        </section>
    )
}

export default Level;