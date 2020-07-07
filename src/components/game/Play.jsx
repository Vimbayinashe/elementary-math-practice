import React, { useEffect, useState } from 'react';
 import { useHistory } from 'react-router-dom';

const Play = ({ gameMethod, level }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);

    console.log('Play: ', gameMethod, level);

    let renderRedirect = () => {
        return history.push(`/game`);
    }
    
    let url = `/questions/${gameMethod}/${level}`;

    useEffect(() =>{
        console.log('fetching in Play');


        let fetchQuestions = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);

                setQuestions(json);

                console.log("questions:");
                
                return json;


            } catch (error) {
                console.error(error);
            }
        }

        fetchQuestions();
        
        
    }, [url])
    

    return(
        <section>
            {/* {
                (gameMethod && level) ? '' : renderRedirect()
            } */}
            <h2>Play</h2>
            <p>Method: { gameMethod } and level: {level}.</p>
            <p>{questions}</p>

        </section>
    )
}

export default Play;