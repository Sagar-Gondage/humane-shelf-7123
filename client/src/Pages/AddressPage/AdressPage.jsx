import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import About from "../CartPage/Reuseable/About";

const AdressPage = () => {
  return (
    <Box bg="#f8f8f8" p="4rem" pr="5rem">
      <Text fontSize={"25px"} fontWeight="500">
        Add New Address
      </Text>
      <br />
      <Box bg="white" w="50%" p="1rem">
        <FormControl>
          <Input
            h="5rem"
            placeholder="Flat Number Building Name , Street/Locality"
            type="text"
          />
          <br />
          <br />

          <Input placeholder="Landmark (Optional)" type="text" />
          <br />
          <br />

          <Input placeholder="Pincode" type="text" />
          <br />
          <br />

          <Input placeholder="Locality" type="text" />
          <br />
          <br />

          <Input placeholder="City" type="text" />
          <br />
          <br />

          <Input placeholder="State" type="text" />
          <br />
          <br />

          <Input placeholder="Customer Name" type="text" />
          <br />
          <br />

          <Input placeholder="10 Digit Mobile Number" type="text" />
          <br />
          <br />

          <RadioGroup>
            <Stack direction="row" spacing={5}>
              <Radio colorScheme={"orange"}>HOME</Radio>
              <Radio colorScheme={"orange"}>OFFICE</Radio>
              <Radio colorScheme={"orange"}>OTHER</Radio>
            </Stack>
          </RadioGroup>
          <br />
          <br />
          <Stack direction="row" spacing={5} justifyContent="right">
            <Button
              color="#ff6f61"
              fontSize={"22px"}
              bg="White"
              _hover={{ bg: "white" }}
            >
              CANCEL
            </Button>
            <Button
              color="white"
              fontSize={"22px"}
              bg="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
            >
              SAVE
            </Button>
          </Stack>
        </FormControl>
      </Box>

      <Box w="50%" fontSize={"12px"}>
        <About />
      </Box>
    </Box>
  );
};

export default AdressPage;
