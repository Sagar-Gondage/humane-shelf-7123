import {
  Box,
  Flex,
  Image,
  Spinner,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

const AllProduct = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {};
  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      // height="340px"
      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      p={"10px"}
    >
      <Box
        width="200px"
        margin="auto"
        p={"20px 20px"}
        bg={"white"}
        rounded={4}
        position={"relative"}
      >
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Image
            src={product?.imageUrl}
            h="150px"
            bg={"#f9f9f9"}
            display="block"
            m={"auto"}
          />
        </Link>
      </Box>
      <Box
        h={"42px"}
        // border={"1px solid blue"}
        fontSize="14px"
        fontWeight={"400"}
        lineHeight="20px"
        color={"#212121"}
        // textOverflow={"ellipsis"}
        textOverflow={"..."}
        overflow="hidden"
        mt="10px"
      >
        {product.productName}
      </Box>
      <Text
        fontSize="12px"
        fontWeight={"400"}
        lineHeight="17px"
        color={"#757575"}
      >
        {product.shortDesc}
      </Text>

      <Flex
        mt={"5px"}
        left="0"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Box
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#1aab2a"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {product.ratings}{" "}
          {/* <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" /> */}
        </Box>
        <Text marginLeft={3} fontSize="12px">
          {product.numberOfRatings}
        </Text>
      </Flex>
      <Flex
        mt={"5px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}
        fontSize="14px"
        mb={"30px"}
        // border={"1px solid red"}
      >
        <Text
          fontSize="12px"
          fontWeight={"400"}
          lineHeight="17px"
          color={"#757575"}
        >
          MRP{" "}
          <Text as={"span"} textDecoration={"line-through"}>
            {" "}
            {product.strikedPrice}
          </Text>
        </Text>
        <Text
          pl={"10px"}
          color="#5ac265"
          fontSize="12px"
          fontWeight={600}
          lineHeight="16px"
        >
          {product.discount}% off
        </Text>
      </Flex>
      <Box>
        <Flex
          position={"absolute"}
          bottom={1}
          left={0}
          right={0}
          marginLeft="10px"
          marginRight="10px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"
        >
          <Flex justifyContent="flex-start" alignItems={"center"}>
            {/* <BiRupee fontSize={"16px"} /> */}

            <Text fontSize={"16px"}> {product.price}</Text>
          </Flex>
          <Stack>
            {count === 0 ? (
              <AddToCartBtn
                key={product._id}
                onClick={() => handleAddToCart(product)}
              >
                {/* {addCartItem.loading && addCartItem._id === product._id ? (
                  <Spinner speed="0.65s" size="xs" />
                ) : (
                  <Flex>
                    <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                    ADD
                  </Flex>
                )} */}
                Add
              </AddToCartBtn>
            ) : (
              <Flex>
                <CartDec>
                  <i className="fa-solid fa-minus"></i>
                </CartDec>
                <Tooltip
                  hasArrow
                  label={`Max Qty 5`}
                  bg="#666"
                  opacity={"0.5"}
                  color="white"
                  placement="top"
                  fontWeight={400}
                  fontSize="12px"
                >
                  {/* {updateCartItem.loading &&
                  updateCartItem._id == product._id ? (
                    <CardCount>
                      <Spinner speed="0.65s" size="xs" />
                    </CardCount>
                  ) : (
                    <CardCount>{countValue}</CardCount>
                  )} */}
                  Count
                </Tooltip>

                <CartInc disabled={count >= 5}>
                  <i className="fa-solid fa-plus"></i>
                </CartInc>
              </Flex>
            )}
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AllProduct;

const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #ff6f61;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #ff6f61;
  min-width: 80px;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartPlusIcon = styled.i`
  margin-right: 5px;
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #ff6f61;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #ff6f61;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
