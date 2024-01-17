export const Button = ({ children, className, type, disabled }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
};
