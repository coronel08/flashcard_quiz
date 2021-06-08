import React, { useState, useRef, useEffect } from 'react'


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontElement = useRef()
    const backElement = useRef()

    function setMaxHeight(){
        const frontHeight = frontElement.current.getBoundingClientRect().height
        const backHeight = backElement.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.allAnswers, flashcard.correctAnswer])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    },[])

    return (
        <div>
            <div className={`card ${flip ? 'flip' : ''}`}
                style = {{height: height }}
                onClick={() => setFlip(!flip)}
            >
                <div className="front" ref={frontElement}>
                    {flashcard.prompt}
                    <div className="flashcard-options">
                        {flashcard.allAnswers}
                    </div>
                </div>
                <div className="back" ref={backElement}>
                    {flip ? flashcard.correctAnswer : flashcard.allAnswers}
                </div>
            </div>
        </div>
    )
}