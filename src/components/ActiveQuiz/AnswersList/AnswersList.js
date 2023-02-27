import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, i) => {
        return <AnswerItem answer={answer} key={i} />;
      })}
    </ul>
  );
};

export default AnswersList;
