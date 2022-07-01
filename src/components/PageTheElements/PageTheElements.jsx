import { useContext, useEffect, useRef, useState } from "react";
import { AerolabContextData } from "../../context";
import arrowPaginationLeft from "../../assets/icons/arrow-left.svg";
import arrowPaginationRight from "../../assets/icons/arrow-right.svg";
import { handleFilterPrice } from "../../utils/filterData.utils";
import { arraySlice } from "../../utils/arraySlice.utils";
import ProductCard from "../ProductCard/ProductCard";
import "./PageTheElements.css";

function PageTheElements() {
  const { state } = useContext(AerolabContextData);
  const [paginatedArray, setPaginatedArray] = useState([]);
  const itemsPerPage = 16;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);

  const categoryValue = state.visibilityCategory;
  const priceValue = state.visibilityPrice;
  const productsData = state.productsData;
  const refDownButton = useRef();
  const refUpButton = useRef();

  useEffect(() => {
    const arr = handleFilterPrice(categoryValue, priceValue, productsData);
    const pagination = arraySlice(currentPage, itemsPerPage, arr);
    const pages = Math.ceil(arr.length / itemsPerPage);
    setNumberOfPages(pages);
    setPaginatedArray(pagination);
    if (currentPage > 0) {
      refDownButton.current.classList.add("active");
    } else {
      refDownButton.current.classList.remove("active");
    }

    if (currentPage + 1 >= numberOfPages) {
      refUpButton.current.classList.remove("active");
    } else {
      refUpButton.current.classList.add("active");
    }
    if (currentPage === 0) {
      setItemNumber(1);
    } else {
      const result = currentPage * pagination.length;
      setItemNumber(result);
    }
  }, [productsData, currentPage, priceValue, categoryValue]);

  const handleClickPagination = (e) => {
    const target = e.target.closest(".content-icon-pagination");
    const paginationData = target.dataset.pagination;
    if (paginationData === "up") {
      if (currentPage + 1 >= numberOfPages) return;
      setCurrentPage((prev) => prev + 1);
    } else {
      if (currentPage <= 0) return;
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="wrapper-products">
      <div className="container-product-pagination">
        <div
          ref={refDownButton}
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
          ref={refUpButton}
          onClick={handleClickPagination}
          className="content-icon-pagination up"
          data-pagination="up"
        >
          <img src={arrowPaginationRight} />
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
          <div className="total-products">{`${itemNumber} of ${
            (currentPage + 1) * paginatedArray.length
          } products`}</div>
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
    </div>
  );
}

export default PageTheElements;
