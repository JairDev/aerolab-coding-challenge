import { useContext, useEffect, useRef, useState } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import ArePointsNeeded from "../ArePointsNeeded/ArePointsNeeded";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import "./ProductCard.css";

const ULR_PRODUCT_REDEEM = "https://coding-challenge-api.aerolab.co/redeem";

function ProductCard({
  id,
  imgSrc,
  productName,
  productCategory,
  productCost,
  isRedeemView,
}) {
  const [loader, setLoader] = useState(false);
  const refActionMessage = useRef();
  const { state, dispatch } = useContext(AerolabContextData);
  const handleClick = (e, id) => {
    const target = e.target.closest(".redeemProduct");
    const productId = target.dataset.idproduct;
    setLoader(true);
    const data = dataService(
      ULR_PRODUCT_REDEEM,
      createHeader("POST", { productId: productId })
    );
    data.then((res) => dispatch({ type: "redeemProduct", payload: res }));
    data.then(() => setLoader(false));
    data.then(() => refActionMessage.current.classList.toggle("show"));
    setTimeout(() => refActionMessage.current.classList.toggle("show"), 1500);
    e.preventDefault();
  };

  if (isRedeemView) {
    return (
      <div className="product-card">
        <div className="product-card-header">
          <img src={imgSrc} />
        </div>
        <div className="product-card-footer">
          <div className="product-card-footer-title">
            <p className="product-card-title">{productName}</p>
            <span className="product-card-subtitle">{productCategory}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img src={imgSrc} />
      </div>
      <div className="product-card-footer">
        <div className="product-card-footer-title">
          <p className="product-card-title">{productName}</p>
          <span className="product-card-subtitle">{productCategory}</span>
        </div>
        <div className="product-card-action">
          <Button
            handleClick={handleClick}
            id={id}
            dynamicClass={`redeemProduct ${
              productCost > state?.userData?.points ? "needPoints" : ""
            }`}
          >
            {loader ? (
              <Loader />
            ) : (
              <ArePointsNeeded
                points={state?.userData?.points}
                productCost={productCost}
              />
            )}
          </Button>
          <Message
            refNode={refActionMessage}
            dynamicClass={"product"}
            type={`${productName}`}
            action={"redeemed"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
