import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import './Level.css';

const Level = () => {

    const [level, setLevel] = useState('');

    let reactSwipeEl;

    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let JSXList = numbers.map( number => (<button onClick={()=>setLevel(number)}> { number } </button>))

    return(
        <section>
            <h3>Choose Level</h3>
            <div className = "swipe-level">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: false }}
                    ref={ el => (reactSwipeEl = el)}
                    >
                    <div>easy</div>
                    <div>medium</div>
                    <div>hard</div>
                </ReactSwipe>
                <button onClick={ () => reactSwipeEl.prev()}>&lt;</button>
                <button onClick={ () => reactSwipeEl.next()}>&gt;</button>
            </div>

            <article className="level-buttons">
                {JSXList}

            </article>
        </section>
    )
}

export default Level;