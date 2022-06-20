import "./NavBar.css"

function NavBar() {
  return (
    <header>
      <nav className="App-nav">
        <div className="App-nav-container-logo">logo</div>
        <div className="App-nav-container-action">
          <div className="App-nav-container-aerocoins">
            <div className="aerocoins-logo">logo</div>
            <div className="aerocoins-points">10000</div>
            <div className="aerocoins-dropdown-icon">drop</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
