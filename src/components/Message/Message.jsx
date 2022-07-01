import successIcon from "../../assets/icons/success-icon.svg";
import "./Message.css";

function Message({ refNode, dynamicClass, type,  action }) {
  return (
    <div ref={refNode} className={`action-message ${dynamicClass}`}>
      <span className="content-success-icon">
        <img src={successIcon} />
      </span>
      <span>{type}</span>
      <span className="redeem-text">{`${action} successfully`}</span>
    </div>
  );
}

export default Message;
