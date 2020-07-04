import React from 'react';
import { useHistory } from 'react-router-dom';



const Home = () => {

    const history = useHistory();

    let renderRedirect = () => {
        console.log('Play button licked!!');
        return history.push(`/game`);
    }

    return(
        <section className="home">
            <p>Play and train yourself to become a pro at Maths Master!</p>

            <div className="buttons">
                <div>
                    <button>+</button>
                    <p>Addition</p>
                </div>
                <div>
                    <button>-</button>
                    <p>Subtraction</p>
                </div>
                <div>
                    <button>&times;</button>
                    <p>Multiplication</p>
                </div>
                <div>
                    <button>&divide;</button>
                    <p>Division</p>
                </div>
            </div>

            <button className="play"
                onClick={renderRedirect}>
                Play
            </button>

        </section>
    )
}

export default Home;
