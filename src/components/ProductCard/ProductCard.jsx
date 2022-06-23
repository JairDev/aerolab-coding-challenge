import { useContext, useReducer } from "react";
import walkCard3 from "../../assets/img/walk-card3.png";
import { dataService } from "../../services/data.service";
import { createHeader } from "../NavBar/NavBar";
import "./ProductCard.css"

const ULR_PRODUCT_REDEEM = "https://coding-challenge-api.aerolab.co/redeem"


function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img src={walkCard3} />
      </div>
      <div className="product-card-footer">
        <div className="product-card-footer-title">
          <p className="product-card-title">Audifonos</p>
          <span className="product-card-subtitle">Home</span>
        </div>
        <div className="product-card-action">
          <form action="">
            <button value="20000" className="button-redeem">Redeem for 12.500</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCard