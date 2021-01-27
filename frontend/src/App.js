import './App.css';
import React, { Component } from 'react';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {list};
  // }

  state = {
    quizzes: []
  };

  async componentDidMount(){
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v2/quizzes/')
      const quizzes = await res.json()
      this.setState({
        quizzes
      })
    } catch(e){
      console.log(e)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Header</h1>
        {this.state.quizzes.map(quiz => (
          <div key={quiz.id + quiz.created_at}>
            <div className="title">
              <h3>{quiz.title}</h3>
            </div>
            <div className="questions">
              <span> Questions: {quiz.question_count} </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default App;