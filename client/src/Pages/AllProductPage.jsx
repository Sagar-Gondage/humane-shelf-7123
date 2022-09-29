import { Box, Flex, Grid, Select, Spacer, Text } from "@chakra-ui/react";
import prodstyles from "./css/allProducts.module.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAPI } from "../actions/product.actions";
import {
  AllBrands,
  allDiscounts,
} from "../constants/function.constants.js/function.constants";
import AllProduct from "../Components/allProductCart";

const AllProductPage = () => {
  const { productList } = useSelector((state) => state);
  const { loading, success, products } = productList;
  // console.log(products);
  const dispatch = useDispatch();

  const brands = AllBrands(products);

  const pageno = [];

  useEffect(() => {
    dispatch(getAllProductsAPI());
  }, [dispatch]);

  const filterbybrand = () => {};

  const filterbydiscount = () => {};

  const handleSort = () => {};

  const decrpage = () => {};

  const incrpage = () => {};

  return (
    <div>
      <Flex>
        <Box>
          <div className={prodstyles.prodpagediv}>
            <div className={prodstyles.filterdiv}>
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid silver",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                FILTER
              </div>

              <div
                style={{ padding: "15px", borderBottom: "1px solid silver" }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  BRANDS
                </div>
                {brands.map((el, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          value={el.count}
                          onChange={filterbybrand}
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}>{el.name}</p>
                      </div>
                      <p>{el.count}</p>
                    </div>
                  );
                })}
              </div>

              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  DISCOUNTS
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <Flex
            justifyContent="space-between"
            marginRight="2rem"
            padding="1rem"
            alignItems="center"
          >
            <Text>All Products</Text>
            <Flex gap="1rem" alignItems="center" justifyContent="center">
              <Text margin="auto" width="100%">
                Sort By
              </Text>
              <Select onChange={handleSort}>
                <option value="rel">Relevance</option>
                <option value="plth">Price: Low to High</option>
                <option value="phtl">Price: High to Low</option>
                <option value="rlth">Rating: Low to High</option>
                <option value="rhtl">Rating: High to Low</option>
              </Select>
            </Flex>
          </Flex>

          <Grid
            width={"100%"}
            // border={"1px solid orange"}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={4}
          >
            {products.map((el, i) => (
              <AllProduct product={el} key={i} />
            ))}
          </Grid>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 7px 0px",
            }}
          >
            <div className={prodstyles.pagination}>
              <div onClick={decrpage} className={prodstyles.othernum}>
                Previous
              </div>
              {pageno.map((el) => {
                return (
                  // <div>
                  //   {el == page ? (
                  //     <div className={prodstyles.numcolor}>{el}</div>
                  //   ) : (
                  //     <div
                  //       onClick={() => setpage(el)}
                  //       className={prodstyles.othernum}
                  //     >
                  //       {el}
                  //     </div>
                  //   )}
                  // </div>
                  <div>Page No Here</div>
                );
              })}
              <div onClick={incrpage} className={prodstyles.othernum}>
                Next
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </div>
  );
};

export default AllProductPage;
