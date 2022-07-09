import { useContext } from "react";
import PageTheElements from "../../components/PageTheElements/PageTheElements";
import { AerolabContextData } from "../../context";
import { removeRepeatedElement } from "../../utils/removeRepeatedElement";

function RedeemHistory() {
  const { state } = useContext(AerolabContextData);
  const redeemHistory = state.userData.redeemHistory;
  const data = removeRepeatedElement(redeemHistory);
  console.log(data);
  return (
    <div className="content-redeem-history">
      <div className="redeem-section-header-title">
        <h2>Redeem History</h2>
      </div>
      <PageTheElements elementsArray={data} isRedeemView={true} />
    </div>
  );
}

export default RedeemHistory;
