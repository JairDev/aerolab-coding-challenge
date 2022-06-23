import { useContext, useReducer } from "react";
import walkCard3 from "../../assets/img/walk-card3.png";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import "./ProductCard.css";

const ULR_PRODUCT_REDEEM = "https://coding-challenge-api.aerolab.co/redeem";

function ProductCard({
  id,
  imgSrc,
  productName,
  productCategory,
  productCost,
}) {
  const {dispatch} = useReducer(AerolabContextData)
  const handleClick = (e) => {
    console.log(e.target.dataset.idproduct);

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
    </div>
  );
}

export default ProductCard;
