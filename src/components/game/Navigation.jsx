import React from 'react';

const Navigation = ({ index, setIndex, questions }) => {

    return(
        <section>

            <div className="navigation-buttons">
                <button className={index>0 ? 'play-buttons' : 'hidden'} 
                    onClick={()=>setIndex(index-1)} >
                    Previous
                </button>
                {
                    index < (questions.length - 1) ?
                    <button className={index < (questions.length - 1) ? 'play-buttons' : 'hidden'} 
                        onClick={()=>setIndex(index+1)} >
                        Next
                    </button> 
                    : <button className={index < (questions.length - 1) ? 'hidden' : 'play-buttons'} >
                        Done
                    </button> 
                }
                {/* <button className={index < (questions.length - 1) ? 'play-buttons' : 'hidden'} 
                    onClick={()=>setIndex(index+1)} >
                    Next
                </button> 
            </div>
            <div className="navigation-buttons submit-buttons">
                <button className={index < (questions.length - 1) ? 'hidden' : 'play-buttons'} >
                    Done
                </button>  */}
            </div>

        </section>
    )
}

export default Navigation;