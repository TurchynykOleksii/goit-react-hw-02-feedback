export const Statistics = ({
  goodState,
  neutralState,
  badState,
  totalState,
  positiveFeetback,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {goodState}</li>
        <li>Neutral: {neutralState}</li>
        <li>Bad: {badState}</li>
        <li>Totala: {totalState}</li>
        <li>
          Positive Feedback: {!positiveFeetback ? '0' : positiveFeetback}%
        </li>
      </ul>
    </>
  );
};
