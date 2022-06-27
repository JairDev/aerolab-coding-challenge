import successIcon from "../../assets/icons/success-icon.svg";
import "./Message.css"

function Message({text, refNode, dynamicClass}) {
  return (
    <div ref={refNode} className={`action-message ${dynamicClass}`}>
      <span className="content-success-icon">
        <img src={successIcon} />
      </span>
      {text}
    </div>
  );
}

export default Message
