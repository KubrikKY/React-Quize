import styles from './FinishedQuiz.module.css';

import Button from '../UI/Button/Button';

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, e) => {
    if (props.results[e] === 'success') {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, i) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[props.results[quizItem.id]],
          ];

          return (
            <li key={i}>
              <strong>{i + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Success {successCount} of {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRepeat} type={'primary'}>
          Repeat
        </Button>
        <Button type={'success'}>Go list test</Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
