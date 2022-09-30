import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AddressBar = () => {
  return (
    <Box
      p="1rem"
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <Text fontWeight={"600"}>Home</Text>
      <Text>Name surname</Text>
      <Text>mobile no</Text>
      <Text>Address</Text>
      <Text>state pincode</Text>
    </Box>
  );
};

export default AddressBar;
