import './confirmComponent.css';
export const ConfirmComponent = ({
  children,
  execFunction,
  resetFunction,
  parameter = ''
}) => {
  const handleClick = () => {
    execFunction(parameter);
  };
  return (
    <div className='confirm'>
      <div className='confirmText'>{children}</div>
      <div className='confirmButtons'>
        <button
          className='confirmButton button button--primary'
          onClick={handleClick}
        >
          Si
        </button>
        <button
          className='confirmButton button button--primary'
          onClick={resetFunction}
        >
          No
        </button>
      </div>
    </div>
  );
};
