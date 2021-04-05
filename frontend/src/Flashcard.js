import React from 'react'

export default function Flashcard({ quiz }) {
    return (
        <div className="card-grid">
            <div className="front">
                {/* {quiz.id} */}
                <h3>{quiz.quiz}</h3>
                {quiz.question}
                {quiz.answers}
            </div>
        </div>
    )
}
