const Options = ({ children, onUpdate, option }) => {
  return (
    <>
      <button type="button" onClick={() => onUpdate(option)}>
        {children}
      </button>
    </>
  );
};

export default Options;
