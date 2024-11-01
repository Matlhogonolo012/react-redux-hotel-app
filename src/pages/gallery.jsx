import { SiExercism } from "react-icons/si";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../components/common/footer";
import "/src/assets/styles/gallery.css"
import Header from "../components/common/header";

function Gallery() {
    return (
        <div className="gallery-container">
            
            <Header/>
            <Link to="/" className="back-link">
      <IoMdArrowRoundBack />
    </Link>
            <h1>
                Take A Glimpse at Our Offering to you <SiExercism />
            </h1>
            <div className="gallery-grid">
                <img className="gallery-image" src="/src/assets/images/pexels-79380313-9696595.jpg" alt="image-1" />
                <img className="gallery-image" src="/src/assets/images/pexels-al-harits-prateja-61828211-8081396.jpg" alt="image-2" />
                <img className="gallery-image" src="/src/assets/images/pexels-aleksandr-evstafev-86841387-9254157.jpg" alt="image-3" />
                <img className="gallery-image" src="/src/assets/images/pexels-captain-10973940.jpg" alt="image-4" />
                <img className="gallery-image" src="/src/assets/images/pexels-cottonbro-5371573.jpg" alt="image-5" />
                <img className="gallery-image" src="/src/assets/images/pexels-divyata-dikola-32569052-7023155.jpg" alt="image-6" />
                <img className="gallery-image" src="/src/assets/images/pexels-hardeep-18033150.jpg" alt="image-7" />
                <img className="gallery-image" src="/src/assets/images/pexels-heyho-8092391.jpg" alt="image-8" />
                <img className="gallery-image" src="/src/assets/images/pexels-mikhail-nilov-7820689.jpg" alt="image-9" />
                <img className="gallery-image" src="/src/assets/images/pexels-pixabay-261041.jpg" alt="image-10" />
                <img className="gallery-image" src="/src/assets/images/pexels-zachtheshoota-1838640.jpg" alt="image-11" />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Gallery;
