import RoomList from "../components/common/roomList";
import Reviews from "../components/common/ratings";
import Footer from "../components/common/footer";
import Location from "../components/common/location";
import HarmonyHeights from "./harmonyHeights";

const HomePage = () => {
  return (
    <div>
      <header>
        <HarmonyHeights />
      </header>
      <main>
        <RoomList />
        <Reviews />
      </main>
      <footer>
        <Location />
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
