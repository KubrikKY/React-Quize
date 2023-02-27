import { Component } from 'react';
import classes from './Quiz.module.css';

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuize';

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: 'Question 1' },
          { text: 'Question 2' },
          { text: 'Question 3' },
          { text: 'Question 4' },
        ],
      },
    ],
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizeWrapper}>
          <h1>QUIZ</h1>

          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
