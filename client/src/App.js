import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const getAllData = async () => {
    const data = await axios.get("http://localhost:8080/products");
    // console.log(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <h1>Working</h1>
      <Routes>
        <Route path="/allProducts" element={<AllProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
