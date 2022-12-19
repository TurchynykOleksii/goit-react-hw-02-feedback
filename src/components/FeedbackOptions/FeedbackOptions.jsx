import { Button } from '../Button';
import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.containerBtn}>
        {options.map(option => (
          <Button
            key={nanoid()}
            title={option}
            name={option}
            handleState={onLeaveFeedback}
          />
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleState: PropTypes.func,
};
