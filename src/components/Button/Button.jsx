import "./Button.css"

function Button({ valueButton, children, dynamicClass, handleClick, refC }) {
  return (
    <form className="aeropay-body-form">
      <button
        onClick={handleClick}
        value={valueButton}
        className={`${dynamicClass} action-button`}
        ref={refC}
      >
        {children}
      </button>
    </form>
  );
}

export default Button;
