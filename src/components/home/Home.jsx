import React from 'react';


const Home = () => {

    return(
        <main className="home">
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

            <button className="play">Play</button>

        </main>
    )
}

export default Home;
