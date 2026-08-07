const Button = ({ className, children, ariaLabel, id, onClick }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
