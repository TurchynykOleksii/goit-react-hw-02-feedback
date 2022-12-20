import { Button } from '../Button';
import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.containerBtn}>
        {options.map(option => (
          <Button
            key={option}
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
