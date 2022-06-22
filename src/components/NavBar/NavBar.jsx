import aerolabLogo from "../../assets/icons/aerolab-logo.svg";
import aerolabCoinLogo from "../../assets/icons/aerolab-coin-logo.svg";
import dropIcon from "../../assets/icons/drop-icon.svg";
import aeropayIcon from "../../assets/icons/aeropay-icon.svg"
import aeropayCloseIcon from "../../assets/icons/aeropay-close-icon.svg"
import "./NavBar.css";

function NavBar() {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="App-nav-container-logo">
          <img src={aerolabLogo} />
        </div>
        <div className="App-nav-container-action">
          <div className="App-nav-container-aerocoins">
            <div className="aerocoins-logo">
              <img src={aerolabCoinLogo} />
            </div>
            <div className="aerocoins-points">10.000</div>
            <div className="aerocoins-dropdown-icon">
              <img src={dropIcon} />
            </div>
          </div>
          <div className="App-nav-container-aeropay-card">
            <div className="aeropay-card">
              <div className="aeropay-header">
                <div className="aeropay-header-title">Add balance</div>
                <div className="aeropay-header-icon">
                  <img src={aeropayCloseIcon}/>
                </div>
              </div>
              <div className="aeropay-body">
                <div className="aeropay-body-aerocard">
                  <div className="aeropay-body-aerocard-header">
                    <div className="aeropay-body-aerocard-header-title">
                      <p>AeroCard</p>
                    </div>
                    <div className="aeropay-body-aerocard-header-icon">
                      <div>
                        <img src={aeropayIcon}/>
                      </div>
                    </div>
                  </div>
                  <div className="aeropay-body-aerocard-footer">
                    <div className="aeropay-body-aerocard-footer-user-name">
                      <p>John Kite</p>
                    </div>
                    <div className="aeropay-body-aerocard-fotter-user-date">
                      <p>07/23</p>
                    </div>
                  </div>
                </div>
                <div className="aeropay-body-points">
                  <div className="aeropay-points 1000">
                    <p>1000</p>
                  </div>
                  <div className="aeropay-points 5000">
                    <p>5000</p>
                  </div>
                  <div className="aeropay-points 7500">
                    <p>7500</p>
                  </div>
                </div>
                <div className="aeropay-body-action">
                  <form className="aeropay-form">
                    <button className="aeropay-button">Add-points</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
