import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard'
import axios from 'axios'
import data from './sampleData'
import './App.css'

/* 
http://localhost:8000/api/v2/quizzes/       has all quizzes and # of questions
http://localhost:8000/api/v2/questions/     has all questions quiz title and answers
http://localhost:8000/api/v2/answers/       has all answers 
http://localhost:8000/api/v2/quizzes/1/all_questions/ all questions by quiz
*/

function App() {
    const [quizzes, setQuizzes] = useState([])

    // SAMPLE DATA FOR TESTING 
    // const [quizzes, setQuizzes] = useState(data)
    // useEffect(() => {
    //     setQuizzes(quizzes.map((questionItem, index) => {
    //         const correctAnswer = questionItem.answers.filter(options => options.correct.toString() === 'true').map(options => {
    //             return options.text
    //         })
    //         const allAnswers = questionItem.answers.map(options => {
    //             return <p key={options.id}> {options.text} </p>
    //         })
    //         return {
    //             id: `${index}-${Date.now()}`,
    //             quiz: questionItem.quiz_title,
    //             prompt: questionItem.prompt,
    //             allAnswers,
    //             correctAnswer,
    //         }
    //     }))
    // }, [])



    useEffect(() => {
        axios
            .get('http://localhost:8000/api/v2/quizzes/1/all_questions/')
            .then(res => {
                setQuizzes(res.data.map((questionItem, index) => {
                    const correctAnswer = questionItem.answers.filter(options => options.correct.toString() === 'true').map(options => {
                        return <p>* {options.text} </p>
                    })
                    const allAnswers = questionItem.answers.map(options => {
                        return <p key={options.id}> - {options.text} </p>
                    })
                    return {
                        id: `${index}-${Date.now()}`,
                        quiz: questionItem.quiz_title,
                        prompt: questionItem.prompt,
                        allAnswers,
                        correctAnswer,
                    }
                }))
                // https://stackoverflow.com/questions/61909924/rendering-json-child-list-from-object-list-in-reactjs
                console.log(res.data)
            })
    }, [])



    return (
        <div className="App">
            <h1>Heading</h1>
            <div className="flashcard-grid">
                {quizzes.map(function (quiz, index) {
                    return (
                        <React.Fragment key={index}>
                            <div className='flashcard'>
                                <h4>{quiz.prompt}</h4>
                                < Flashcard quiz={quiz} key={quiz.id} />
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default App
