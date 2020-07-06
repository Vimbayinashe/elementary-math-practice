import React from 'react';
import ReactSwipe from 'react-swipe';
import './Level.css';

const Level = () => {

    let reactSwipeEl;

    return(
        <section>
            <h3>Hi Swipe!</h3>
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

            <article>
                
            </article>
        </section>
    )
}

export default Level;