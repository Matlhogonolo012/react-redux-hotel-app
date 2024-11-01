import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import SignupPage from "./pages/signupPage";
import RoomDetailsPage from "./pages/roomDetails";
import NotFound from "./pages/pageNotFound";
import ForgotPassword from "./pages/forgotPassword";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/payment";
import Confirmation from "./pages/confirmation";
import Gallery from "./pages/gallery";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signUpPage" element={<SignupPage />} />
        <Route path="/roomDetails" element={<RoomDetailsPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="BookingForm" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
