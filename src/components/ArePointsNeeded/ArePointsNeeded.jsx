import aeropayLogo from "../../assets/icons/aeropay-icon.svg";
import "./ArePointsNeeded.css"

function ArePointsNeeded({ points, productCost }) {
  if (points < productCost) {
    const pointsINeed = productCost - points;
    return (
      <div className="contain-text-button-redeem">
        <span>You need</span>
        <span>
          <img src={aeropayLogo} />
        </span>
        <span>{pointsINeed}</span>
      </div>
    );
  }
  return (
    <div className="contain-text-button-redeem">
      <span>Reddem for</span>
      <span>
        <img src={aeropayLogo} />
      </span>
      <span>{productCost}</span>
    </div>
  );
}

export default ArePointsNeeded