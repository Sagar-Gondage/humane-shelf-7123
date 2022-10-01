import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";
import Homepage from "./Pages/Homepage/Homepage";
import Navigation from "./Components/Navigation/Navigation";
import Navbar from "./Components/Navbar";
import Auth from "./Components/Navbar/Auth";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Auth />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProductPage />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
