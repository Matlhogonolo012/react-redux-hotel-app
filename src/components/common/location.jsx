import '/src/assets/styles/location.css';  

function Location() {
  return (
    <section className="location-section">
      <h2 className="location-title">Location</h2>
      <div className="location-content">
        <div className="location-map">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Garankuwa%20Art%20Craft%20garankuwa+(Harmony%20Heights)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
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
