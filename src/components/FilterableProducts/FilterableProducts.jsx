import { useContext, useEffect, useReducer } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import ProductCard from "../ProductCard/ProductCard";

const URL_PRODUCTS = "https://coding-challenge-api.aerolab.co/products";

function FilterableProducts() {
  const { state, dispatch } = useContext(AerolabContextData);

  useEffect(() => {
    const data = dataService(URL_PRODUCTS, createHeader("GET"));
    data.then((res) => dispatch({ type: "receiveProductsData", payload: res }));
  }, []);
  return (
    <>
      {state?.productsData.map(({_id, img, name, category, cost }) => (
        <ProductCard
          id={_id}
          imgSrc={img.url}
          productName={name}
          productCategory={category}
          productCost={cost}
        />
      ))}
    </>
  );
}

export default FilterableProducts;
