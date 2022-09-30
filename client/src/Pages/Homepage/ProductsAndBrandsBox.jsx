import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  FeaturedBrands,
  health,
  popularCats,
  topSellingProducts,
} from "./Constants";
import BrandsCard from "./Reusesable/BrandsCard";
import ProductsCard from "./Reusesable/ProductsCard";
const ProductsAndBrandsBox = () => {
  return (
    <Box bg="#f6f6f6">
      {/* Top image */}
      <Box p="2rem">
        <Image
          w="95%"
          m="auto"
          src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
        />
      </Box>

      {/* End */}

      <Box mt="2rem">
        <Text
          pl="2rem"
          fontWeight={"400"}
          lineHeight={"26px"}
          fontSize={"22px"}
        >
          Popular Categories
        </Text>
        <BrandsCard something={popularCats} />
      </Box>

      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={FeaturedBrands} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* brands */}

      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={health} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* brands */}

      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={health} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link
            href="https://www.1mg.com/categories/featured-128"
            target="_blank"
          >
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>
    </Box>
  );
};

export default ProductsAndBrandsBox;
