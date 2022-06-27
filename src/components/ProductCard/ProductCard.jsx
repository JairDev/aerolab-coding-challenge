import { useContext, useRef } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import Message from "../Message/Message";
import "./ProductCard.css";

const ULR_PRODUCT_REDEEM = "https://coding-challenge-api.aerolab.co/redeem";

function ProductCard({
  id,
  imgSrc,
  productName,
  productCategory,
  productCost,
}) {
  const refActionMessage = useRef()
  const { dispatch } = useContext(AerolabContextData);

  const handleClick = (e) => {
    const productId = e.target.dataset.idproduct;
    const data = dataService(
      ULR_PRODUCT_REDEEM,
      createHeader("POST", { productId: productId })
    );
    data.then((res) => dispatch({ type: "redeemPoints", payload: res }));
    data.then(() => refActionMessage.current.classList.toggle("show"));
    setTimeout(() => refActionMessage.current.classList.toggle("show"), 2000);
    e.preventDefault();
  };
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
          <form action="">
            <button
              onClick={handleClick}
              value="20000"
              data-idproduct={id}
              className="button-redeem"
            >
              Redeem for {productCost}
            </button>
          </form>
        </div>
      </div>
      <Message
        refNode={refActionMessage}
        text={`product redeemed successfully`}
        dynamicClass={"product"}
      />
    </div>
  );
}

export default ProductCard;
