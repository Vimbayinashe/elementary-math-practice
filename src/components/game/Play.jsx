import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import Navigation from './Navigation';
import './Level.css';


const Play = ({ gameMethod, level }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [multiplier, setMultiplier] = useState('');
    const [index, setIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswer] = useState([]);
    const [results, setResults] = useState({});

    console.log("results");
    console.log(results);

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

    const postAnswers = async () => {
        let postUrl = `/answers/${gameMethod}`;
        console.log('Posting answers!')
        // console.log({
        //     userId: 12,
        //     multiplier,
        //     answers: selectedAnswers,
        // });
        try {

            const response = await axios.post(postUrl, {
                                userId: 12,
                                multiplier,
                                answers: selectedAnswers,
                            });

            console.log(response);
            setResults(response.data);
            console.log("response.data:");
            console.log(response.data);
            // console.log(results);

            return response;
            
        } catch (error) {
            console.error(error);
        }
    }

    
    const answerClicked = (ans) => {
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

            return setSelectedAnswer([...updatedAnswers]);

        } else {
            // else set the below
            return  setSelectedAnswer([...selectedAnswers, {
                        id: index + 1,
                        qn: questions[index],
                        ans
                    }]);
        }
    }


    return(
        <section>
            { (gameMethod && level) ? '' : renderRedirect() }
            {/* <h2>Play</h2> */}
            <div>
                {/* <h3>{ index + 1 }. </h3> */}
                <div>
                    { questions.length > 0 
                        ? 
                        <Question index={index} 
                            qn={questions[index]} 
                            multiplier={multiplier}
                            answerClicked={answerClicked}/>
                        : <p className="questions">Your questions are loading'</p> }
                </div>
            </div>

            <Navigation index={index} 
                setIndex={setIndex}
                questions={questions}
                postAnswers={postAnswers}/>

        </section>
    )
}

export default Play;