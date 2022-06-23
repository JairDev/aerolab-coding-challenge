import aerolabLogo from "../../assets/icons/aerolab-logo.svg";
import aerolabCoinLogo from "../../assets/icons/aerolab-coin-logo.svg";
import dropIcon from "../../assets/icons/drop-icon.svg";
import aeropayIcon from "../../assets/icons/aeropay-icon.svg";
import aeropayCloseIcon from "../../assets/icons/aeropay-close-icon.svg";
import "./NavBar.css";
import { dataService } from "../../services/data.service";
import { useContext, useEffect, useState } from "react";
import { AerolabContextData } from "../../context";

const URL_DATA_USER = "https://coding-challenge-api.aerolab.co/user/me";
const URL_USER_POINTS = "https://coding-challenge-api.aerolab.co/user/points";

export function createHeader(method, bodyObj) {
  const header = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiNjBjOTUyMzQwMzAwMjE2YmQxYjciLCJpYXQiOjE2NTUzOTg2MDF9.Ad7f8yRQZITY5YNmg9JRyvXg8-Ogi252mOm_4XVykac`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(bodyObj),
  };
  return header;
}

function NavBar() {
  let amount = 0;


  useEffect(() => {
    const data = dataService(URL_DATA_USER, createHeader("GET"));
    
  }, []);

  const handleClick = (e) => {
    amount = Number(e.target.value);
    const data = dataService(
      URL_USER_POINTS,
      createHeader("POST", { amount: amount })
    );
    e.preventDefault();
  };

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
            <div className="aerocoins-points">{state?.userData?.points}</div>
            <div className="aerocoins-dropdown-icon">
              <img src={dropIcon} />
            </div>
          </div>
          <div className="App-nav-container-aeropay-card">
            <div className="aeropay-card">
              <div className="aeropay-header">
                <div className="aeropay-header-title">Add balance</div>
                <div className="aeropay-header-icon">
                  <img src={aeropayCloseIcon} />
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
                        <img src={aeropayIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="aeropay-body-aerocard-footer">
                    <div className="aeropay-body-aerocard-footer-user-name">
                      <p>{state?.userData?.name}</p>
                    </div>
                    <div className="aeropay-body-aerocard-fotter-user-date">
                      <p>07/23</p>
                    </div>
                  </div>
                </div>
                <div className="aeropay-body-points">
                  <div className="aeropay-points 1000">
                    <form className="aeropay-form">
                      <button
                        onClick={handleClick}
                        value="1000"
                        className="aeropay-add-point-button"
                      >
                        1000
                      </button>
                    </form>
                  </div>
                  <div className="aeropay-points 5000">
                    <form className="aeropay-body-form">
                      <button
                        onClick={handleClick}
                        value="5000"
                        className="aeropay-add-point-button"
                      >
                        5000
                      </button>
                    </form>
                  </div>
                  <div className="aeropay-points 7500">
                    <form className="aeropay-body-form">
                      <button
                        onClick={handleClick}
                        value="7500"
                        className="aeropay-add-point-button"
                      >
                        7500
                      </button>
                    </form>
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
