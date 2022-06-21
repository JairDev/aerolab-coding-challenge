import aerolabLogo from "../../assets/icons/aerolab-logo.svg";
import aerolabCoinLogo from "../../assets/icons/aerolab-coin-logo.svg";
import dropIcon from "../../assets/icons/drop-icon.svg";
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
            <div className="aerocoins-points">10000</div>
            <div className="aerocoins-dropdown-icon">
              <img src={dropIcon} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
