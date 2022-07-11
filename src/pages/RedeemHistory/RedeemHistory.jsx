import { useContext } from "react";
import PageTheElements from "../../components/PageTheElements/PageTheElements";
import { AerolabContextData } from "../../context";
import { countRepeatedElements } from "../../utils/countRepeatedElements";
import { removeRepeatedElement } from "../../utils/removeRepeatedElement";

function RedeemHistory() {
  const { state } = useContext(AerolabContextData);
  const redeemHistory = state.userData.redeemHistory;
  const data = removeRepeatedElement(redeemHistory);
  const countElements = countRepeatedElements(redeemHistory)
  // console.log(data);
  // console.log(countElements)
  return (
    <div className="content-redeem-history">
      <div className="redeem-section-header-title">
        <h2>Redeem History</h2>
      </div>
      <PageTheElements countElements={countElements} elementsArray={data} isRedeemView={true} />
    </div>
  );
}

export default RedeemHistory;
