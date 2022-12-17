import { Button } from '../Button';
import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <>
      <div className={css.containerBtn}>
        <Button title="good" handleState={handleClickGood} />
        <Button title="neutral" handleState={handleClickNeutral} />
        <Button title="bad" handleState={handleClickBad} />
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleState: PropTypes.func,
};
