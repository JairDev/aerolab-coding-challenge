import { useContext, useEffect, useRef, useState } from "react";
import { AerolabContextData } from "../../context";
import { dataService } from "../../services/data.service";
import { createHeader } from "../../utils/createHeaders.utils";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import dropIcon from "../../assets/icons/drop-icon.svg";
import aeropayIcon from "../../assets/icons/aeropay-icon.svg";
import aerolabCoinLogo from "../../assets/icons/aerolab-coin-logo.svg";
import aerolabLogo from "../../assets/icons/aerolab-logo.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

const URL_USER_POINTS = "https://coding-challenge-api.aerolab.co/user/points";
const URL_USER_DATA = "https://coding-challenge-api.aerolab.co/user/me";

const buttonData = [{ value: "1000" }, { value: "5000" }, { value: "7500" }];

function NavBar() {
  const [loader, setLoader] = useState(false);
  const [amount, setAmount] = useState(1000);
  const { state, dispatch } = useContext(AerolabContextData);
  const refAeropayCard = useRef();
  const refDropDownIcon = useRef();
  const refAddPointMessage = useRef();
  const refButton = useRef([]);

  useEffect(() => {
    const userData = dataService(URL_USER_DATA, createHeader("GET"));
    userData.then((res) => dispatch({ type: "receiveUserData", payload: res }));

    refButton.current.map((button) => {
      if (button.className.includes("active")) {
        setAmount(Number(button.value));
      }
    });
  }, [state.points, state.redeemMessage]);

  useEffect(() => {
    refButton.current[0].classList.add("active");
  }, []);

  const handleClick = (e) => {
    setAmount(Number(e.target.value));
    refButton.current.map((button) => {
      if (button.className.includes("active")) {
        button.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    e.preventDefault();
  };

  const handleClickAddPoints = (e) => {
    setLoader(true);
    const data = dataService(
      URL_USER_POINTS,
      createHeader("POST", { amount: amount })
    );
    data.then((res) => dispatch({ type: "addPoints", payload: res }));
    data.then(() => setLoader(false));
    data.then(() => refAddPointMessage.current.classList.toggle("show"));
    setTimeout(() => refAddPointMessage.current.classList.toggle("show"), 2000);
    e.preventDefault();
  };

  const handleDropDownClick = (e) => {
    refAeropayCard.current.classList.toggle("show");
    refDropDownIcon.current.classList.toggle("rotate");
  };

  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="App-nav-container-logo">
          <Link to={"/"}>
            <img src={aerolabLogo} alt="Aerolab logo"/>
          </Link>
        </div>
        <div className="App-nav-container-links">
          <ul>
            <li>
              <Link to={"redeem-history"}>Redeem History</Link>
            </li>
          </ul>
        </div>
        <div className="App-nav-container-action">
          <div
            onClick={handleDropDownClick}
            className="App-nav-container-aerocoins"
          >
            <div className="aerocoins-logo">
              <img src={aerolabCoinLogo} />
            </div>
            <div className="aerocoins-points">{state?.userData?.points}</div>
            <div ref={refDropDownIcon} className="aerocoins-dropdown-icon">
              <img src={dropIcon} />
            </div>
          </div>
          <div ref={refAeropayCard} className="App-nav-container-aeropay-card">
            <div className="aeropay-card">
              <div className="aeropay-header">
                <div className="aeropay-header-title">Add balance</div>
                <div className="aeropay-header-balance">{amount}</div>
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
                  <div className="aeropay-points">
                    {buttonData.map((button, i) => (
                      <Button
                        key={button.value}
                        dynamicClass={"aeropay-quantity"}
                        valueButton={button.value}
                        refC={(el) => (refButton.current[i] = el)}
                        handleClick={handleClick}
                      >
                        {button.value}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="aeropay-body-action">
                  <Button
                    dynamicClass={"aeropay-add"}
                    handleClick={handleClickAddPoints}
                  >
                    {loader ? <Loader /> : "Add Points"}
                  </Button>
                  <Message
                    refNode={refAddPointMessage}
                    dynamicClass={"add-points"}
                    type={`${amount}`}
                    action={"added"}
                  />
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
