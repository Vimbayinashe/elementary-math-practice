import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import './Level.css';


const Play = ({ gameMethod, level }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [multiplier, setMultiplier] = useState('');
    const [index, setIndex] = useState('');
    const [answer, setAnswer] = useState("");

    // console.log('Play: ', gameMethod, level);

    let renderRedirect = () => {
        return history.push(`/game`);
    }
    
    let url = `/questions/${gameMethod}/${level}/`;


    useEffect(() =>{
        // console.log('fetching in Play');


        let fetchQuestions = async () => {

            console.log(url);

            try {
                const response = await axios.get(url);
                // console.log(response);
                const data = await response.data;
                // console.log(data);
                // const json = await response.json();
                // console.log(json);

                setQuestions(data.questions);
                setMultiplier(data.multiplier);

                
                return response;


            } catch (error) {
                console.error(error);
            }
        }

        if(gameMethod && level) fetchQuestions();
        
        
    }, [url])

    // console.log("questions:");
    // console.log(questions);
    // console.log(multiplier);

    let errorMessage = multiplier ? '': 'We are currently having trouble loading your questions.'

    // function increaseIndex () {
    //     if(index < (questions.length-1) ) return setIndex(0) 
    // } 


    return(
        <section>
            {
                (gameMethod && level) ? '' : renderRedirect()
            }
            <h2>Play</h2>
            <p>{errorMessage}</p>
            <div>
                <span>{ index + 1 }. </span>
                <div>
                    <Question qn={questions[index]} 
                        multiplier={multiplier}
                        setAnswer={setAnswer}/>
                </div>
            </div>

            <div className="answer-buttons">
                <button className={index>0 ? '' : 'hidden'} 
                    onClick={()=>setIndex(index-1)} >
                    Previous
                </button>
                <button className={index < (questions.length - 2) ? '' : 'hidden'} 
                    onClick={()=>setIndex(index+1)} >
                    Next
                </button> 
                  {/* index >= 9 ? index = 0 : index + 1 */}
            </div>

        </section>
    )
}

export default Play;