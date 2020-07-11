import React from 'react';
import { useHistory } from 'react-router-dom';

const Results = ({results}) => {

    const history = useHistory();

    let renderRedirect = () => {
        return history.push(`/`);
    }

    let comment = remark(results.correct / results.totalQuestions)

    return(
        <section className="results">
            {/* <h2>Results</h2> */}
            <div> {comment} </div>
            <div>You answered {results.correct} out of {results.totalQuestions}!</div>
            <button className="play"
                onClick={renderRedirect}>
                Play Again
            </button>
        </section>
    )
}

export default Results;

function remark (grade) {
    if (grade === 1) return 'Excellent!!!';
    if (grade >= 0.8) return 'Great Work!!';
    if (grade >= 0.6) return 'Well done!';
    if (grade >= 0.5) return 'Good Effort!';
    else return 'Keep on trying'
}