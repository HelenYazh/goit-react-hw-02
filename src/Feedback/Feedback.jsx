const Feedback = ({ good, neutral, bad, total }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
    </ul>
  );
};

export default Feedback;
