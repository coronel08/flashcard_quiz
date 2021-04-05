import React,{useState} from 'react'

export default function Flashcard({ quiz }) {
    const [flip, setFlip] = useState(false)
    return (
        <div className="card-grid">
            <div 
                className={`card ${flip ? 'flip' : ''}`} 
                onClick={() => setFlip(!flip)}
            >
                {/* {quiz.id} */}
                <h3>{quiz.prompt}</h3>
                {/* {flip ? quiz.quiz : quiz.prompt} */}
                {quiz.options.map(option => {
                    return <div className="option">{option.text}</div>
                })}
            </div>
            <div className="back">

            </div>
        </div>
    )
}