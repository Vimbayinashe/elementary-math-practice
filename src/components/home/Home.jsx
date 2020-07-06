import React from 'react';
import { useHistory } from 'react-router-dom';



const Home = () => {

    const history = useHistory();

    let renderRedirect = () => {
        console.log('Play button clicked    !!');
        return history.push(`/game`);
    }

    return(
        <section className="home">
            <p>Play and train yourself to become a pro at Maths Master!</p>

            <button className="play"
                onClick={renderRedirect}>
                Play
            </button>

        </section>
    )
}

export default Home;
