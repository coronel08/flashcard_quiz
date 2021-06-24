import React, { useState, useEffect, useRef } from 'react';
import Flashcard from './Flashcard'
import axios from 'axios'
import data from './sampleData'
import './App.css'

/* 
port is typically 8000 but used 8001 for reverse proxy
http://localhost:8000/api/v2/quizzes/       has all quizzes and # of questions
http://localhost:8000/api/v2/questions/     has all questions quiz title and answers
http://localhost:8000/api/v2/answers/       has all answers 
http://localhost:8000/api/v2/quizzes/1/all_questions/ all questions by quiz
*/

function App() {
    const categoryElement = useRef()
    // const [quizzes, setQuizzes] = useState([])
    const [category, setCategory] = useState([])

    // SAMPLE DATA FOR TESTING 
    const [quizzes, setQuizzes] = useState(data)
    useEffect(() => {
        setQuizzes(quizzes.map((questionItem, index) => {
            const correctAnswer = questionItem.answers.filter(options => options.correct.toString() === 'true').map(options => {
                return options.text
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
    }, [])


    useEffect(() => {
        axios
            .get('http://localhost:8001/api/v2/quizzes/')
            .then(res => {
                setCategory(res.data)
            })
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios
            .get(`http://localhost:8001/api/v2/quizzes/${categoryElement.current.value}/all_questions/`)
            .then(res => {
                setQuizzes(res.data.map((questionItem, index) => {
                    const correctAnswer = questionItem.answers.filter(options => options.correct.toString() === 'true').map(options => {
                        return options.text
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
        }

return (
    <div className="App">
        <h1>Heading</h1>
        {/* Select Quiz Section */}
        <form className="header" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" ref={categoryElement}>
                    {category.map(cat => {
                        return <option value={cat.id} key={cat.id}>{cat.title} Question-count:{cat.question_count}</option>
                    })}
                </select>
            </div>
            <div className="form-group">
                <button className="btn">Submit</button>
            </div>
        </form>
        {/* Pass quiz info to flashcard */}
        <div className="container">
            <div className="card-grid">
                {quizzes.map(function (quiz, index) {
                    return (
                        < Flashcard flashcard={quiz} key={quiz.id} />
                    )
                })}
            </div>

        </div>
    </div>
)
}

export default App
