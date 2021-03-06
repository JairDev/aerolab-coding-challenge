import { useContext } from "react";
import PageTheElements from "../../components/PageTheElements/PageTheElements";
import { AerolabContextData } from "../../context";
import { countRepeatedElements } from "../../utils/countRepeatedElements";
import { removeRepeatedElement } from "../../utils/removeRepeatedElement";

function RedeemHistory() {
  const { state } = useContext(AerolabContextData);
  const redeemHistory = state.userData.redeemHistory;
  const data = removeRepeatedElement(redeemHistory);
  return (
    <div className="content-redeem-history">
      <div className="redeem-section-header-title">
        <h1 className="redeem-section-title">Redeem History</h1>
      </div>
      <PageTheElements elementsArray={data} isRedeemView={true} />
    </div>
  );
}

export default RedeemHistory;
