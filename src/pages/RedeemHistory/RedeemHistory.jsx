import { useContext } from "react"
import { AerolabContextData } from "../../context"

function RedeemHistory() {
  const {state} = useContext(AerolabContextData)
  console.log(state)
  return(
    <div className="content-redeem-history">
      Redeem
    </div>
  )
}

export default RedeemHistory