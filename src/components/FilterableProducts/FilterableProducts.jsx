import { useContext, useEffect, useRef, useState } from "react";
import { AerolabContextData } from "../../context";

import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import PageTheElements from "../PageTheElements/PageTheElements";
import "./FilterableProducts.css";

const URL_PRODUCTS = "https://coding-challenge-api.aerolab.co/products";

const buttonData = [
  { value: "recent", label: "Most Recent" },
  { value: "lowest-price", label: "Lowest Price" },
  { value: "highest-price", label: "Highest Price" },
];

function FilterableProducts() {
  const { state, dispatch } = useContext(AerolabContextData);
  const productsData = state.productsData;
  const [loader, setLoader] = useState(true);
  const refButton = useRef([]);

  useEffect(() => {
    const data = dataService(URL_PRODUCTS, createHeader("GET"));
    data.then((res) => dispatch({ type: "receiveProductsData", payload: res }));
    data.then(() => setLoader(false));
  }, []);

  useEffect(() => {
    // refButton.current[0].classList.add("active");
  }, []);

  const handleClickSort = (e) => {
    const valueSort = e.target.value;
    refButton.current.map((button) => {
      if (button.className.includes("active")) {
        button.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    dispatch({ type: "sortByPrice", payload: valueSort });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const filterValue = e.target.value;
    dispatch({ type: "filterByCategory", payload: filterValue });
  };

  const getCategoryOptions = () => {
    const productCategory = state?.productsData?.map(
      (option) => option.category
    );
    return [...new Set(productCategory)];
  };

  return (
    <>
      <div className="product-section-header">
        <div className="product-section-header-title">
          <h3 className="product-section-title">Tech Products</h3>
        </div>
        <div className="product-section-header-filter">
          <div className="product-section-header-filter-category">
            <form className="form-filter-category">
              <label htmlFor="filter">Filter by</label>
              <select
                onChange={handleChange}
                className="select-filter-category"
                name="filter"
                id="filter"
              >
                <option value="all">All products</option>
                {getCategoryOptions().map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="product-section-header-filter-price">
            <span>Sort by</span>
            <div className="filter-price-options-container">
              {buttonData.map((button, i) => (
                <div key={button.value} className="filter-price-option">
                  <Button
                    dynamicClass={"aeropay-filter"}
                    valueButton={button.value}
                    buttonRef={(el) => (refButton.current[i] = el)}
                    handleClick={handleClickSort}
                  >
                    {button.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {loader ? (
        <Loader dynamicClass={"loading-products "} />
      ) : (
        <PageTheElements elementsArray={productsData} />
      )}
    </>
  );
}

export default FilterableProducts;
