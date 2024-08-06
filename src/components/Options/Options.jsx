// const Options = ({ children, onUpdate, option, onReset, totalFeedback }) => {
//   return (
//     <>
//       <button type="button" onClick={() => onUpdate(option)}>
//         {children}
//       </button>
//       {totalFeedback > 0 && (
//         <button type="button" onClick={onReset}>
//           Reset
//         </button>
//       )}
//     </>
//   );
// };

const Options = ({ onUpdate, onReset, totalFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => onUpdate("good")}>
        Good
      </button>
      <button type="button" onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
};
export default Options;
