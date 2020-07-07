import React, { useEffect } from 'react';
 import { useHistory } from 'react-router-dom';

const Play = ({ gameMethod, level }) => {

    const history = useHistory();

    console.log('Play: ', gameMethod, level);

    let renderRedirect = () => {
        return history.push(`/game`);
    }
    

    useEffect(() =>{
        console.log('fetching in Play');
        
    }, [])
    

    return(
        <section>
            {
                (gameMethod && level) ? '' : renderRedirect()
            }
            <h2>Play</h2>

        </section>
    )
}

export default Play;