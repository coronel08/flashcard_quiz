import React, { useState } from 'react'

export default function Flashcard({ quiz }) {
    const [flip, setFlip] = useState(false)
    return (
        <div className={`card ${flip ? 'flip' : ''}`} 
            onClick={() => setFlip(!flip)}
        >
            <div key={quiz}>{quiz.answers.map(options => {
                return <p key={options.id}>{options.id} {flip ? options.correct.toString() : options.text}</p>
            })}</div>
        </div>
        // <div className="card-grid">
        //     <div 
        //         className={`card ${flip ? 'flip' : ''}`} 
        //         onClick={() => setFlip(!flip)}
        //     >
        //         <h3>{quiz.prompt}</h3>
        //         {quiz.options.map(option => {
        //             return <div className="option">{flip ? option.id : option.text}</div>
        //         })}
        //     </div>
        // </div>
    )
}