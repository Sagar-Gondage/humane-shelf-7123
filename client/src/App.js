import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/AllProductPage";

function App() {
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
