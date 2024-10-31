import '/src/components/authentication/ai/ai-css/reviews.css'; // Import the CSS file


function Reviews() {
  return (
    <section className="reviewsSection">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb29e3ceaacb18ebeaf6c3581e82ac7c86fdbcc1813a4c444d6f025176422a3?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
        alt="" 
        className="reviewsBackground" 
      />
      <div className="reviewsContainer">
        <h2 className="reviewsTitle">Reviews</h2>
        <div className="ratingContainer">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <img 
                key={i} 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8282b442bf52624a2792e657ce3fa6ca0da822ac0b3839c1144cb5518823bd2a?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
                alt="Star" 
                className="starIcon" 
              />
            ))}
          </div>
          <p className="ratingText">4.5 - EXCELLENT</p>
        </div>
        <div className="review">
          <h3 className="reviewTitle">"Fantastic for Families!"</h3>
          <p className="reviewText">
            We loved our stay at Harmony Heights! The Kids' Club kept our kids entertained, and the Family Pool was perfect for family fun. The on-site restaurant made dining easy and enjoyable, and the laundry facilities were super convenient for our extended stay. Highly recommend for a family getaway!
          </p>
          <p className="reviewAuthor">— Jessica L., Pretoria</p>
        </div>
        <div className="review">
          <h3 className="reviewTitle">"Great Stay with Kids"</h3>
          <p className="reviewText">
            Harmony Heights was excellent for our family trip. The Kids' Club and Family Pool were big hits with our children. The on-site restaurant was convenient and had great food. The laundry facilities were a lifesaver. Only downside was the room size, but overall a fantastic stay!
          </p>
          <p className="reviewAuthor">— Mark R., Free State</p>
        </div>
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85ba2746a99e5920b53c63145f8434da34c921fe9bc6c06b4a61216838b3b96?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
        alt="Hotel Amenities" 
        className="amenitiesImage" 
      />
    </section>
  );
}

export default Reviews;
