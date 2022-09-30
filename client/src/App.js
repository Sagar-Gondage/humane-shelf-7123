import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
