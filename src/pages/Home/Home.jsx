import heroImage from "../../assets/img/hero-image.png";
import walkCard1 from "../../assets/img/walk-card1.png";
import walkCard2 from "../../assets/img/walk-card2.png";
import walkCard3 from "../../assets/img/walk-card3.png";
import walkCardLogo from "../../assets/icons/walk-card-logo.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import "./Home.css";
import React, { Suspense, useRef } from "react";

const LazyProducts = React.lazy(() =>
  import("../../components/FilterableProducts/FilterableProducts")
);

function Home() {
  const scrollTo = useRef();
  const handleClick = (e) => {
    const topCoord = scrollTo.current.getBoundingClientRect().y;
    window.scrollTo(0, topCoord + 100);
  };
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
          <div onClick={handleClick} className="cta-button-container">
            VIEW ALL PRODUCTS
            <span className="icon-cta-landing">
              <img src={arrowDown} />
            </span>
          </div>
        </div>
        <div className="landing-illustration-container">
          <div className="illustration-container">
            <img src={heroImage} />
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

      <section ref={scrollTo} className="product-section">
        <div className="product-section-container">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyProducts />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default Home;
