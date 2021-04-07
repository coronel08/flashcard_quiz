import React, { useState } from 'react'


export default function Flashcard({ quiz }) {
    const [flip, setFlip] = useState(false)

    return (
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            {flip ? quiz.correctAnswer : quiz.allAnswers}
        </div>
    )
}