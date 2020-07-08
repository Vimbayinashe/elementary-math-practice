import React, { useEffect } from 'react';

const Question = ({ qn, multiplier, setAnswer}) => {

    let answers = [
        multiplier * qn ,
        multiplier * (qn - 1),
        multiplier * (qn + 2),
        multiplier * (qn + 1) 
    ]

    shuffleArray(answers);

    let JSXList = answers.map( (answer, index) => (
        <button key={index} onClick={()=>setAnswer(answer)}> 
            { answer } 
        </button>));


    return(
        <article>
            <div> { qn} &times; {multiplier} </div>
            <div className="level-buttons">
                <h3>Answer:</h3>
                { JSXList }
            </div>
        </article>
    )
}

export default Question;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}