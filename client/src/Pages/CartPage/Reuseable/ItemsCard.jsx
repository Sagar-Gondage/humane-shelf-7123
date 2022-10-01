import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const ItemsCard = () => {
  let price = 24;

  const [count, setcount] = useState(1);
  const [inc, setinc] = useState(price);
  const handleINC = () => {
    setcount(count + 1);
    setinc(inc + price);
  };
  const handleDEC = () => {
    setcount(count - 1);
    setinc(inc - price);
  };
  return (
    <Box
      bg="white"
      display={"flex"}
      justifyContent="space-between"
      p="1rem"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      {/* 1 */}
      <Box>
        <Text fontWeight={"600"}>
          Himalaya Herbals Purifying Neem Face Wash
        </Text>
        <br />
        <Text>pump bottle of 200 ml Face Wash</Text>
        <br />
        <Button bg={"white"} _hover={{ bg: "white" }} mt="1rem">
          <BsTrash /> Remove
        </Button>
      </Box>
      {/* 2 */}
      <Box textAlign={"right"}>
        <Text>rs {inc}</Text>
        <br />
        <Text>
          MRP <span style={{ textDecoration: "line-through" }}>₹68</span>
        </Text>
        <br />
        <Box display={"flex"} mt="1rem">
          <Button
            disabled={count === 1}
            onClick={handleDEC}
            bg={"white"}
            _hover={{ bg: "white" }}
            borderRadius="90%"
          >
            <GrSubtractCircle fontSize="2rem" />
          </Button>
          <Text>{count}</Text>
          <Button
            onClick={handleINC}
            bg={"white"}
            _hover={{ bg: "white" }}
            borderRadius="90%"
          >
            <IoIosAddCircle fontSize="2rem" color="#ff6f61" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemsCard;
