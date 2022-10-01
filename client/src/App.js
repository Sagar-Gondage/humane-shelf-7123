import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";

import Homepage from "./Pages/Homepage/Homepage";
import Cartpage from "./Pages/CartPage/Cartpage";
import AdressPage from "./Pages/AddressPage/AdressPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import SingleProductPage from "./Pages/products/SingleProductPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProductPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/cart/address-page" element={<AdressPage />} />
        <Route path="/cart/payment/all/card" element={<PaymentPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
