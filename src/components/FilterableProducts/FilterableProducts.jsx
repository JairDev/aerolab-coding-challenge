import { useContext, useEffect, useReducer, useState } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import ProductCard from "../ProductCard/ProductCard";
import arrowPaginationLeft from "../../assets/icons/arrow-left.svg";
import arrowPaginationRight from "../../assets/icons/arrow-right.svg";
import { handleFilterPrice } from "../../utils/filterData";

const URL_PRODUCTS = "https://coding-challenge-api.aerolab.co/products";

function FilterableProducts() {
  const { state, dispatch } = useContext(AerolabContextData);
  const categoryValue = state.visibilityCategory;
  const priceValue = state.visibilityPrice;
  const productsData = state.productsData;

  useEffect(() => {
    const data = dataService(URL_PRODUCTS, createHeader("GET"));
    data.then((res) => dispatch({ type: "receiveProductsData", payload: res }));
  }, []);

  const handleClickSort = (e) => {
    const valueSort = e.target.value;
    dispatch({ type: "sortByPrice", payload: valueSort });
  };

  const handleChange = (e) => {
    const filterValue = e.target.value;
    dispatch({ type: "filterByCategory", payload: filterValue });
  };

  const getCategoryOptions = () => {
    const productCategory = state.productsData.map((option) => option.category);
    return [...new Set(productCategory)];
  };

  return (
    <>
      <div className="product-section-header">
        <div className="product-section-header-title">
          <h2>Tech Products</h2>
        </div>
        <div className="product-section-header-filter">
          <div className="product-section-header-filter-category">
            <form className="form-filter-category">
              <label htmlFor="filter">Filter by</label>
              <select
                onChange={handleChange}
                className="select-filter-category"
                name="filter"
                id=""
              >
                <option value="all">All products</option>
                {getCategoryOptions().map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </form>
          </div>

          <div className="product-section-header-filter-price">
            <span>Sort by</span>
            <div className="filter-price-options-container">
              <div className="filter-price-option">
                <button onClick={handleClickSort} value="recent">
                  Most Recent
                </button>
              </div>
              <div className="filter-price-option">
                <button onClick={handleClickSort} value="lowest-price">
                  Lowest Price
                </button>
              </div>
              <div className="filter-price-option">
                <button onClick={handleClickSort} value="highest-price">
                  Highest Price
                </button>
              </div>
            </div>
          </div>

          <div className="container-product-pagination">
            <div className="content-icon-pagination left">
              <img src={arrowPaginationLeft} />
            </div>
            <div className="product-pagination">Page 1 of 2</div>
            <div className="content-icon-pagination right">
              <img src={arrowPaginationRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-products">
        {handleFilterPrice(categoryValue, priceValue, productsData).map(
          ({ _id, img, name, category, cost }) => (
            <ProductCard
              key={_id}
              id={_id}
              imgSrc={img.url}
              productName={name}
              productCategory={category}
              productCost={cost}
            />
          )
        )}
      </div>
    </>
  );
}

export default FilterableProducts;
