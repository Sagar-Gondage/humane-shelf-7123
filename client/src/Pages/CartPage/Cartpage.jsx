import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProductsCard from "../Homepage/Reusesable/ProductsCard";
import About from "./Reuseable/About";
import { topSellingProducts } from "./Reuseable/CartConstants";
import CouponCard from "./Reuseable/CouponCard";
import ItemsCard from "./Reuseable/ItemsCard";
import TaxCard from "./Reuseable/TaxCard";

const Cartpage = () => {
  return (
    <Box bg="#f8f8f8" p="2rem" px={"10rem"}>
      {/* this box will have cards  */}
      <Box display={"flex"} justifyContent="space-between" w="90" m="auto">
        {/* this one will have cart items and products  */}
        <Box w="60%">
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />

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
          <TaxCard />
        </Box>
      </Box>
      <Box w="100%" m="auto">
        <About />
      </Box>
    </Box>
  );
};

export default Cartpage;
