import React from 'react';

import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>2 how are you?</span>
        <small>4 for 1000</small>
      </p>
      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
