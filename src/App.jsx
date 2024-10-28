import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import PaymentConfirmation from "./pages/paymentConfirmation";
import SignupPage from "./pages/signupPage";
import RoomDetailsPage from "./pages/roomDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/userPage" element={<UserPage/>} />
        <Route path="/adminPage" element ={<AdminPage/>} />
        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/paymentConfirmation" element={<PaymentConfirmation/>} />
        <Route path="/signUpPage" element={<SignupPage/>} />
        <Route path="/roomDetails" element={<RoomDetailsPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
