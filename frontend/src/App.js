import React, {useState, useEffect} from 'react';
import Flashcard from './Flashcard'
import axios from 'axios'

/* 
http://localhost:8000/api/v2/quizzes/       has all quizzes and # of questions
http://localhost:8000/api/v2/questions/     has all questions quiz title and answers
http://localhost:8000/api/v2/answers/       has all answers 

http://localhost:8000/api/v2/quizzes/1/all_questions/ all questions by quiz
*/

function App() {

    const [quizzes, setQuizzes] = useState([])
    // useEffect(() => {
    //     axios
    //     .get('http://127.0.0.1:8000/api/v2/questions/')
    //     // .get('http://localhost:8000/api/v2/quizzes/')
    //     .then(res => {
    //         setQuizzes(res.data.results.map((questionItem, index) => {
    //             const answers = questionItem.answers.map(answer => {
    //                 return <div className="options">{answer.text}</div>
    //             })
    //             return {
    //                 id: `${index}-${Date.now()}`,
    //                 quiz: questionItem.quiz_title,
    //                 question: questionItem.prompt,
    //                 answers: answers
    //             }
    //         }))
    //         // https://stackoverflow.com/questions/61909924/rendering-json-child-list-from-object-list-in-reactjs
    //         console.log(res.data)
    //     })
    // }, [])

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/v2/quizzes/1/all_questions/')
        .then(res => {
            setQuizzes(res.data.map((questionItem, index) => {
                const options = [...questionItem.answers]
                return {
                    id: `${index}-${Date.now()}`,
                    quiz: questionItem.quiz_title,
                    prompt: questionItem.prompt,
                    options
                }
            }))
            // https://stackoverflow.com/questions/61909924/rendering-json-child-list-from-object-list-in-reactjs
            console.log(res.data)
        })
    }, [])


    return (
        <div className="App">
            <h1>Header</h1>
            <div className="quiz">
                {quizzes.map(quiz => {
                    return < Flashcard quiz={quiz} key={quiz.id} />
                })}
            </div>
        </div>
    )
}

export default App
