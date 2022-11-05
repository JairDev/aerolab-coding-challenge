import { useContext, useEffect, useRef, useState } from "react";
import { AerolabContextData } from "../../context";
import arrowPaginationLeft from "../../assets/icons/arrow-left.svg";
import arrowPaginationRight from "../../assets/icons/arrow-right.svg";
import { handleFilterPrice } from "../../utils/filterData.utils";
import { arraySlice } from "../../utils/arraySlice.utils";
import ProductCard from "../ProductCard/ProductCard";
import "./PageTheElements.css";

function PageTheElements({ elementsArray, isRedeemView }) {
  const { state } = useContext(AerolabContextData);
  const [paginatedArray, setPaginatedArray] = useState([]);
  const itemsPerPage = 16;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const [lastItem, setLastItem] = useState(itemsPerPage);

  const categoryValue = state.visibilityCategory;
  const priceValue = state.visibilityPrice;

  const refDownButtonTop = useRef();
  const refUpButtonTop = useRef();

  const refDownButtonBottom = useRef();
  const refUpButtonBottom = useRef();

  useEffect(() => {
    const resultArray = handleFilterPrice(
      categoryValue,
      priceValue,
      elementsArray
    );
    const pagination = arraySlice(currentPage, itemsPerPage, resultArray);
    const pages = Math.ceil(resultArray.length / itemsPerPage);
    setNumberOfPages(pages);
    setPaginatedArray(pagination);
    if (currentPage > 0) {
      refDownButtonTop.current.classList.add("active");
      refDownButtonBottom.current.classList.add("active");
    } else {
      refDownButtonTop.current.classList.remove("active");
      refDownButtonBottom.current.classList.remove("active");
    }

    if (currentPage + 1 >= numberOfPages) {
      refUpButtonTop.current.classList.remove("active");
      refUpButtonBottom.current.classList.remove("active");
    } else {
      refUpButtonTop.current.classList.add("active");
      refUpButtonBottom.current.classList.add("active");
    }
    if (currentPage === 0) {
      setItemNumber(1);
      setLastItem(itemsPerPage);
    } else {
      const firstItem = itemsPerPage * currentPage + 1;
      const lastItem = (currentPage + 1) * pagination.length;

      setItemNumber(firstItem);
      setLastItem(lastItem);
    }
    if (pagination.length < itemsPerPage) {
      if (elementsArray) {
        setLastItem(elementsArray.length);
      }
    }
  }, [currentPage, priceValue, categoryValue, elementsArray]);

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
          ref={refDownButtonTop}
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
          ref={refUpButtonTop}
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
            key={name}
            id={_id}
            imgSrc={img.url}
            productName={name}
            productCategory={category}
            productCost={cost}
            isRedeemView={isRedeemView}
          />
        ))}
      </div>

      <div className="product-section-footer">
        <div className="product-section-footer-wrapper">
          <div className="total-products">{`${itemNumber} of ${lastItem} products`}</div>
          <div className="container-product-pagination">
            <div
              ref={refDownButtonBottom}
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
              ref={refUpButtonBottom}
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
