import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import ProductCard from "../ProductCard/ProductCard";
import arrowPaginationLeft from "../../assets/icons/arrow-left.svg";
import arrowPaginationRight from "../../assets/icons/arrow-right.svg";
import { handleFilterPrice } from "../../utils/filterData.utils";
import Button from "../Button/Button";
import "./FilterableProducts.css";
// import ContainerButton, { Button } from "../Button/Button";

const URL_PRODUCTS = "https://coding-challenge-api.aerolab.co/products";

const buttonData = [
  { value: "recent", label: "Most Recent" },
  { value: "lowest-price", label: "Lowest Price" },
  { value: "highest-price", label: "Highest Price" },
];

export const itemsPagination = (arr, itemsPerPage) => {
  let newArr = [];
  let items = Math.ceil(arr.length / itemsPerPage);
  for (let i = 1; i <= items; i++) {
    newArr.push(i.toString());
  }
  return newArr;
};

export const sliceArr = (currentPage, itemsPerPage, arr) => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const sliceArr = [...arr].slice(start, end);
  return sliceArr;
};

function FilterableProducts() {
  const itemsPerPage = 16;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedArray, setPaginatedArray] = useState([]);
  const { state, dispatch } = useContext(AerolabContextData);
  const categoryValue = state.visibilityCategory;
  const priceValue = state.visibilityPrice;
  const productsData = state.productsData;
  const visibilityPrice = state.visibilityPrice;
  const refButton = useRef([]);

  useEffect(() => {
    const data = dataService(URL_PRODUCTS, createHeader("GET"));
    data.then((res) => dispatch({ type: "receiveProductsData", payload: res }));
  }, []);

  useEffect(() => {
    const arr = handleFilterPrice(categoryValue, priceValue, productsData);
    const pagination = sliceArr(currentPage, itemsPerPage, arr);
    const pages = Math.ceil(arr.length / itemsPerPage);
    setNumberOfPages(pages);
    setPaginatedArray(pagination);
  }, [productsData, currentPage, visibilityPrice]);

  const handleClickPagination = (e) => {
    const target = e.target.closest(".content-icon-pagination");
    const paginationData = target.dataset.pagination;
    if (paginationData === "up") {
      if(currentPage + 1 >= numberOfPages) return
      setCurrentPage((prev) => prev + 1);
    } else {
      if(currentPage <= 0) return
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleClickSort = (e) => {
    const valueSort = e.target.value;
    dispatch({ type: "sortByPrice", payload: valueSort });
    e.preventDefault();
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
                    refC={(el) => (refButton.current[i] = el)}
                    handleClick={handleClickSort}
                  >
                    {button.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="container-product-pagination">
            <div
              onClick={handleClickPagination}
              className="content-icon-pagination down"
              data-pagination="down"
            >
              <img src={arrowPaginationLeft} />
            </div>
            <div className="product-pagination">
              {`Page ${currentPage + 1} of ${numberOfPages}`}
            </div>
            <div
              onClick={handleClickPagination}
              className="content-icon-pagination up"
              data-pagination="up"
            >
              <img src={arrowPaginationRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-products">
        {paginatedArray.map(({ _id, img, name, category, cost }) => (
          <ProductCard
            key={_id}
            id={_id}
            imgSrc={img.url}
            productName={name}
            productCategory={category}
            productCost={cost}
          />
        ))}
      </div>
      <div className="product-section-footer">
        <div className="product-section-footer-wrapper">
          <div className="total-products">1 of 16 products</div>
          <div className="container-product-pagination">
            <div
              onClick={handleClickPagination}
              className="content-icon-pagination down"
              data-pagination="down"
            >
              <img src={arrowPaginationLeft} />
            </div>
            <div className="product-pagination">
              {`Page ${currentPage + 1} of ${numberOfPages}`}
            </div>
            <div
              onClick={handleClickPagination}
              className="content-icon-pagination up"
              data-pagination="up"
            >
              <img src={arrowPaginationRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterableProducts;
