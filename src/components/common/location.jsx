import '/src/components/authentication/ai/ai-css/location.css'; // Assuming you want to use a regular CSS file now

function Location() {
  return (
    <section className="location-section">
      <h2 className="location-title">Location</h2>
      <div className="location-content">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee3f43c05f7d5f2ef35009ad723d3a495ae294275dee549164bc50675db570f?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
          alt="Map of Harmony Heights location" 
          className="location-map" 
        />
        <div className="address-container">
          <h3 className="address-title">Address:</h3>
          <address className="address-details">
            Arts and Crafts Centre<br />
            5088 Maele Street<br />
            Zone 6<br />
            Ga-Rankuwa<br />
            Pretoria
          </address>
        </div>
      </div>
    </section>
  );
}

export default Location;
