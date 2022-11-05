import "./Button.css";

function Button({
  valueButton,
  children,
  dynamicClass,
  handleClick,
  buttonRef,
  id,
}) {
  return (
    <form className="aeropay-body-form">
      <button
        onClick={handleClick}
        value={valueButton}
        className={`${dynamicClass} action-button`}
        ref={buttonRef}
        data-idproduct={id}
      >
        {children}
      </button>
    </form>
  );
}

export default Button;
