import heroImage from "../../assets/img/hero-image.png"
import walkCard1 from "../../assets/img/walk-card1.png"
import walkCard2 from "../../assets/img/walk-card2.png"
import walkCard3 from "../../assets/img/walk-card3.png"
import "./Home.css"

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
            button
          </div>
        </div>
        <div className="landing-illustration-container">
          <div className="illustration-container">
            <img src={heroImage} alt=""/>
          </div>
        </div>
      </section>
     
    </main>
  );
}

export default Home;
