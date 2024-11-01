import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingList from "../components/Booking/bookingList";
import Favorites from "/src/components/Booking/favourites.jsx";
import RateBooking from "../components/Booking/RateBooking";
import { CgHello } from "react-icons/cg";
import Footer from "../components/common/footer";
import Logout from "../components/authentication/logout";
import "/src/assets/styles/usedashboard.css"

const UserPage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <p>Please login to view your profile.</p>;
  }

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>
        <CgHello /> Welcome, {user.email}
      </h1>
      <Logout/>
      <div>
        <BookingList />
      </div>
      <div>
        <Favorites />
      </div>
      <div>
        <RateBooking />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserPage;
