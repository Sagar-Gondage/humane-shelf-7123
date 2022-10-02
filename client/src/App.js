import "./App.css";
import { Container } from "@chakra-ui/react";

import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";
import Navbar from "./Components/Navbar";
import Auth from "./Components/Navbar/Auth";
import Profile from "./Pages/Profile";
import Homepage from "./Pages/Homepage/Homepage";
import Cartpage from "./Pages/CartPage/Cartpage";
import AdressPage from "./Pages/AddressPage/AdressPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import SingleProductPage from "./Pages/products/SingleProductPage";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./Components/Navbar/Login";
function App() {
  return (
    <Container maxW={"100%"} p={0}>
      <nav>
        <Navbar />
      </nav>
      <Auth />
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/cart/address-page" element={<RequiredAuth><AdressPage /></RequiredAuth>} />
        <Route path="/cart/payment/all/card" element={<RequiredAuth><PaymentPage /></RequiredAuth>} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
