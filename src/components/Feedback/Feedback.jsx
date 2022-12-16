import { Button } from '../Button';
export const Feedback = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <div>
        <Button title="good" handleState={handleClickGood} />
        <Button title="neutral" handleState={handleClickNeutral} />
        <Button title="bad" handleState={handleClickBad} />
      </div>
    </>
  );
};
