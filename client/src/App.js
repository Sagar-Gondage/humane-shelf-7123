import "./App.css";
import { Container } from "@chakra-ui/react";

import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllProductPage from "./Pages/products/AllProductPage";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";
import Auth from "./Components/Navbar/Auth";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Container className='App'  maxW={"none"} p={0}>
      <nav>
      <Navbar />
      </nav>
      <Auth />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProductPage />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
