import React from 'react';
import { useHistory } from 'react-router-dom';


const Navigation = ({ index, setIndex, questions, postAnswers }) => {

    const history = useHistory();

    const renderRedirect = () => {
        return history.push(`/results`);
    }

    const handleClick = () => {
        postAnswers();
        renderRedirect();
    }


    return(
        <section>

            <div className="navigation-buttons">
                <button className={index>0 ? 'play-buttons' : 'hidden'} 
                    onClick={()=>setIndex(index-1)} >
                    Previous
                </button>
                {
                    index < (questions.length - 1) ?
                    <button className={index < (questions.length - 1) ? 'play-buttons' : 'hidden'} 
                        onClick={()=>setIndex(index+1)} >
                        Next
                    </button> 
                    : <button className={index < (questions.length - 1) ? 'hidden' : 'play-buttons'} 
                        onClick={handleClick}>
                        Done
                    </button> 
                }

            </div>

        </section>
    )
}

export default Navigation;