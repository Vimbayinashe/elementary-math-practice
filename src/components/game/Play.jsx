import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import './Level.css';


const Play = ({ gameMethod, level }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [multiplier, setMultiplier] = useState('');
    const [index, setIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswer] = useState([]);

    console.log('selectedAnswers: ', selectedAnswers);

    let renderRedirect = () => {
        return history.push(`/game`);
    }
    
    let url = `/questions/${gameMethod}/${level}/`;


    useEffect(() =>{

        let fetchQuestions = async () => {

            console.log(url);

            try {
                const response = await axios.get(url);
                const data = await response.data;

                setQuestions(data.questions);
                setMultiplier(data.multiplier);

                return response;

            } catch (error) {
                console.error(error);
            }
        }

        if(gameMethod && level) fetchQuestions();
        
    }, [gameMethod, level, url])


    let errorMessage = multiplier ? '': 'We are currently having trouble loading your questions.'

    
    const answerClicked = (ans) => {
        console.log('current answer: ', ans);

        // check if ans.id exists
        if (selectedAnswers.some( answer => answer.id === (index + 1))) {
            
            // if true set updated answers
            let updatedAnswers = selectedAnswers.map(item => {
                if(item.id === (index + 1)) {
                    return  {
                                id: index + 1,
                                qn: questions[index],
                                ans
                            };
                } 
                else return item;
            });

            setSelectedAnswer([...updatedAnswers]);

        } else {
            // else set the below
            setSelectedAnswer([...selectedAnswers, {
                id: index + 1,
                qn: questions[index],
                ans
            }]);
        }

        return setTimeout(()=>{
                    setIndex(index+1);
                }, 2000) 
    }


    return(
        <section>
            { (gameMethod && level) ? '' : renderRedirect() }
            <h2>Play</h2>
            <p>{errorMessage}</p>
            <div>
                <h3>{ index + 1 }. </h3>
                <div>
                    { questions.length > 0 
                        ? 
                        <Question qn={questions[index]} 
                        multiplier={multiplier}
                        answerClicked={answerClicked}/>
                        : <p className="questions">Your questions are loading'</p> }
                </div>
            </div>

            <div className="navigation-buttons">
                <button className={index>0 ? 'play-buttons' : 'hidden'} 
                    onClick={()=>setIndex(index-1)} >
                    Previous
                </button>
                <button className={index < (questions.length - 1) ? 'play-buttons' : 'hidden'} 
                    onClick={()=>setIndex(index+1)} >
                    Next
                </button> 
            </div>

        </section>
    )
}

export default Play;