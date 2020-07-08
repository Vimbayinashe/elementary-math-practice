import React, { useEffect, useMemo, useState } from 'react';

const Question = ({ qn, multiplier, setAnswer}) => {

    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    let answers = [
            multiplier * qn ,
            multiplier * (qn - 1),
            multiplier * (qn + 2),
            multiplier * (qn + 1) 
        ]
    
    useMemo(() => {
        shuffleArray(answers);
        setShuffledAnswers(answers);

    }, [answers])

            // useEffect(() => {
            //     shuffleArray(answers);
            // }, [answers])

    let JSXList = shuffledAnswers.map( (ans, index) => (
        <button key={index} onClick={()=>setAnswer(ans)}> 
            { ans } 
        </button>));

    // shuffleArray(JSXList);


    return(
        <article>
            <div className="questions"> { qn} &times; {multiplier} </div>
            <h3>Answer:</h3>
            <div className="answer-buttons">
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