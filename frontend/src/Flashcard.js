import React, { useState } from 'react'


export default function Flashcard({ quiz }) {
    const [flip, setFlip] = useState(false)
    const correctAnswer = quiz.filter(options => options.correct.toString() === 'true').map(options => {
        return `${options.id}. ${options.text}`
    })
    const allAnswers = quiz.map(options => {
        return <p key={options.id}> {options.id}. {options.text} </p>
    })

    return (
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            {flip ? correctAnswer : allAnswers}
        </div>
    )
}