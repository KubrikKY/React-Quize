import { Component } from 'react';
import classes from './Quiz.module.css';

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuize';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id: , succses, error]}
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          { id: 1, text: 'Черный' },
          { id: 2, text: 'Синий' },
          { id: 3, text: 'Красный' },
          { id: 4, text: 'Зеленный' },
        ],
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        answers: [
          { id: 1, text: 'в 1700 году' },
          { id: 2, text: 'в 1702 году' },
          { id: 3, text: 'в 1703 году' },
          { id: 4, text: 'в 1803 году' },
        ],
      },
    ],
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const values = Object.values(this.state.answerState)[0];
      if (values === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      let timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  onRepeatHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizeWrapper}>
          {this.state.isFinished ? (
            <>
              <h1>RESULT</h1>
              <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRepeat={this.onRepeatHandler}
              />
            </>
          ) : (
            <>
              <h1>QUIZ</h1>
              <ActiveQuiz
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                question={this.state.quiz[this.state.activeQuestion].question}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                onAnswerClick={this.onAnswerClickHandler}
                state={this.state.answerState}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
