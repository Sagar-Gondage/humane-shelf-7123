import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsCard from "../Homepage/Reusesable/ProductsCard";
import About from "./Reuseable/About";
import { topSellingProducts } from "./Reuseable/CartConstants";
import CouponCard from "./Reuseable/CouponCard";
import ItemsCard from "./Reuseable/ItemsCard";
import TaxCard from "./Reuseable/TaxCard";

const Cartpage = () => {
  const data = JSON.parse(localStorage.getItem("cartItems")) || [];

  const getTotal = data.reduce((acc, ele) => acc + ele.price, 0);
  // console.log(getTotal, "totoal");
  const navigate = useNavigate();
  const [trigger, settrigger] = useState(false);

  const handleNavigate = () => {
    navigate("/cart/address-page");
  };
  console.log(trigger);
  return (
    <Box bg="#f8f8f8" p="2rem" px={"10rem"}>
      {/* this box will have cards  */}
      <Box display={"flex"} justifyContent="space-between" w="90" m="auto">
        {/* this one will have cart items and products  */}
        <Box w="60%">
          {data.length > 0 &&
            data.map((e) => (
              <ItemsCard
                productsData={e}
                settrigger={settrigger}
                price={e.price}
              />
            ))}

          <br />
          <Text
            mb="1rem"
            pl="2rem"
            fontWeight={"400"}
            lineHeight={"26px"}
            fontSize={"22px"}
          >
            Popular Categories
          </Text>
          <ProductsCard something={topSellingProducts} prodVal={4} />
        </Box>

        {/* thi sone will have total coupons etc  */}
        <Box w="35%">
          <CouponCard />
          <br />
          <TaxCard getTotal={getTotal} handleNavigate={handleNavigate} />
        </Box>
      </Box>
      <Box w="100%" m="auto">
        <About />
      </Box>
    </Box>
  );
};

export default Cartpage;
