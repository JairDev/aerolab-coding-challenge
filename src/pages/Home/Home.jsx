import heroImage from "../../assets/img/hero-image.png";
import walkCard1 from "../../assets/img/walk-card1.png";
import walkCard2 from "../../assets/img/walk-card2.png";
import walkCard3 from "../../assets/img/walk-card3.png";
import walkCardLogo from "../../assets/icons/walk-card-logo.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowPaginationLeft from "../../assets/icons/arrow-left.svg";
import arrowPaginationRight from "../../assets/icons/arrow-right.svg";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <main>
      <section className="landing">
        <div className="landing-cta-container">
          <div className="proposal-container">
            <span className="proposal-label">Explore The</span>
            <h1 className="proposal-title">Tech Zone</h1>
            <h2 className="proposal-subtitle">
              Here you’ll be able to exchange all of your hard-earned Aeropoints
              and exchange them for cool tech.
            </h2>
          </div>
          <div className="cta-button-container">
            VIEW ALL PRODUCTS{" "}
            <span className="icon-cta-landing">
              <img src={arrowDown} />
            </span>
          </div>
        </div>
        <div className="landing-illustration-container">
          <div className="illustration-container">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>
      <section className="walkthrough-section">
        <div className="container-walkthrough-cards">
          <div className="walkthrough-card">
            <div className="walkthrough-card-header">
              <img src={walkCard1} />
            </div>
            <div className="walkthrough-card-footer">
              <div className="walkthrough-card-footer-title">
                <div className="walkthrough-card-footer-contain-logo">
                  <img src={walkCardLogo} />
                </div>
                <p className="walkthrough-card-title">1—browse</p>
              </div>
              <div className="walkthrough-card-body">
                <p>
                  Browse our tech catalog with more than 20 top tech products
                </p>
              </div>
            </div>
          </div>

          <div className="walkthrough-card middle">
            <div className="walkthrough-card-header">
              <img src={walkCard2} />
            </div>
            <div className="walkthrough-card-footer">
              <div className="walkthrough-card-footer-title">
                <div className="walkthrough-card-footer-contain-logo">
                  <img src={walkCardLogo} />
                </div>
                <p className="walkthrough-card-title">2—choose</p>
              </div>
              <div className="walkthrough-card-body">
                <p>Exchange your hard-earned AeroPoints for a cool tech item</p>
              </div>
            </div>
          </div>

          <div className="walkthrough-card">
            <div className="walkthrough-card-header">
              <img src={walkCard3} />
            </div>
            <div className="walkthrough-card-footer">
              <div className="walkthrough-card-footer-title">
                <div className="walkthrough-card-footer-contain-logo">
                  <img src={walkCardLogo} />
                </div>
                <p className="walkthrough-card-title">3—enjoy</p>
              </div>
              <div className="walkthrough-card-body">
                <p>All done We’ll take care of delivery of your tech item!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-container">
          <div className="product-section-header">
            <div className="product-section-header-title">
              <h2>Tech Products</h2>
            </div>
            <div className="product-section-header-filter">
              <div className="product-section-header-filter-category">
                <form className="form-filter-category">
                  <label htmlFor="filter">Filter by</label>
                  <select
                    className="select-filter-category"
                    name="filter"
                    id=""
                  >
                    <option value="">All products</option>
                    <option value="">Gaming</option>
                    <option value="">Audio</option>
                    <option value="">Smart Home</option>
                    <option value="">Monitors & Tv</option>
                  </select>
                </form>
              </div>

              <div className="product-section-header-filter-price">
                <span>Sort by</span>
                <div className="filter-price-options-container">
                  <div className="filter-price-option">
                    <p>Most Recent</p>
                  </div>
                  <div className="filter-price-option">
                    <p>Lowest Price</p>
                  </div>
                  <div className="filter-price-option">
                    <p>Highest Price</p>
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="product-section-footer">
            <div className="product-section-footer-wrapper">
              <div className="total-products">1 of 16 products</div>
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
        </div>
      </section>
    </main>
  );
}

export default Home;
