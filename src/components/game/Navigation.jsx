import React from 'react';

const Navigation = ({ index, setIndex, questions }) => {

    return(
        <section>

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

export default Navigation;