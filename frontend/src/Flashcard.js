import React, { useState } from 'react'


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)

    return (
        <div>
            <div className={`card ${flip ? 'flip' : ''}`}
                onClick={() => setFlip(!flip)}
            >
                <div className="front">
                    {flashcard.prompt}
                    <div className="flashcard-options">
                        {flashcard.allAnswers}
                    </div>
                </div>
                <div className="back">
                    {flip ? flashcard.correctAnswer : flashcard.allAnswers}
                </div>
            </div>
        </div>
    )
}