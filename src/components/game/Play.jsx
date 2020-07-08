import React, { useEffect, useState } from 'react';
 import { useHistory } from 'react-router-dom';
 import axios from 'axios';

const Play = ({ gameMethod, level }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [multiplier, setMultiplier] = useState('');

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

    

    return(
        <section>
            {
                (gameMethod && level) ? '' : renderRedirect()
            }
            <h2>Play</h2>
            <p>Method: { gameMethod } and level: {level}.</p>
            <p>{questions}</p>

        </section>
    )
}

export default Play;