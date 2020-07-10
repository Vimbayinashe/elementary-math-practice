import React from 'react';

const Question = ({ index, qn, multiplier, answerClicked}) => {


    let answers = [
            multiplier * qn ,
            multiplier * (qn - 1),
            multiplier * (qn + 2),
            multiplier * (qn + 1) 
        ]
    
    // Answers still jumping around on the screen when clicked
    shuffleArray(answers);

    let JSXList = answers.map( (ans, index) => (
        <button key={index} onClick={()=>answerClicked(ans)}> 
            { ans } 
        </button>));


    return(
        <article>
            <div className="questions"> 
                <span>({ index + 1 }.) </span> { qn} &times; {multiplier} 
            </div>
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

    return array;
}