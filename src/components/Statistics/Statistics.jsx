export const Statistics = ({ goodState, neutralState, badState }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {goodState}</li>
        <li>Neutral: {neutralState}</li>
        <li>Bad: {badState}</li>
      </ul>
    </>
  );
};
