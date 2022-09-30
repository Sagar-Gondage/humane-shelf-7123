import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import About from "../CartPage/Reuseable/About";
import TaxCard from "../CartPage/Reuseable/TaxCard";
import AddressBar from "./AddressBar";
import Card from "./Card";

const PaymentPage = () => {
  return (
    <Box bg="#f8f8f8">
      <Stack
        p="2rem"
        w="70%"
        m="auto"
        bg="white"
        direction={"row"}
        justifyContent="space-between"
      >
        <Box w="50%">
          <Text fontSize={"25px"} fontWeight="500">
            Card Payment
          </Text>
          <Card />
        </Box>

        <Box w="40%">
          <br />
          <AddressBar />
          <br />
          <TaxCard />
        </Box>
      </Stack>
      <About />
    </Box>
  );
};

export default PaymentPage;
