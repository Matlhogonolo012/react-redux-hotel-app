import '/src/assets/styles/harmonyheights.css'; 
import Header from './header';

function HarmonyHeights() {
  return (
    <div className="homeLandingPage">
      <Header />
      <main className="mainContent">
        <section className="heroSection">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b031548a7cd1922ea9d6a5c9772357fcff145cba8b170a1e821a4bc63203088?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
            alt="Harmony Heights Hotel" 
            className="heroImage" 
          />
          <h1 className="heroTitle">Welcome to Harmony Heights</h1>
          <p className="heroSubtitle">Experience luxury and comfort in every stay</p>
        </section>
        <section className="infoSection">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34b2c4ec15d12d8884b030b840e0b2f40b8167dd7793aa5ec5bdb72224a39b16?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
            alt="" 
            className="infoBackground" 
          />
          <div className="infoContent">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f1ff4573d7078304e10b0475f202be26c04e0b2a13ac962d71c345b6c663a?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
              alt="Harmony Heights Exterior" 
              className="infoImage" 
            />
            <div className="infoText">
              <h2 className="infoTitle">
                <span className="locationHighlight">GAUTENG, PRETORIA</span><br />
                Harmony Heights
              </h2>
              <p className="infoDescription">
                Nestled at the heart of Pretoria, Harmony Heights offers stunning views of the cityscape, including the iconic Union Buildings and vibrant local vendors.
              </p>
              <p className="infoAmenities">
                Harmony Heights is a comprehensive retreat with modern amenities, including a relaxing spa, a childrens play area, and various activities to enhance your stay. Enjoy a memorable getaway with easy access to these unique local attractions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HarmonyHeights;
