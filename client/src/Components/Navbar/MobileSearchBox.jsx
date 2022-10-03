import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import styles from "./SearchBox.module.css";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

import SingleProduct from "./SingleProduct";
import { FiSearch } from "react-icons/fi";
import { ArrowBackIcon } from "@chakra-ui/icons";

const SearchBar = styled.div`
  position: relative;
  border: 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
  min-width: 575px;
  margin-left: 20px;

  border-radius: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  outline: 0;
  font-size: 13px;
  line-height: 18px;
  padding: 14px;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  width: 50%;
  & input {
    display: block;
    background-color: #f9f9f9;
    border: none;
    width: 100%;
  }
  & input:focus {
    outline: none;
  }
  & svg {
    position: absolute;
    right: 22px;
    cursor: pointer;
  }
`;
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#4fbb90"
    strokeWidth={3}
    height={"16px"}
    width={"16px"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const MobileSearchBox = () => {
  const [query, setQuery] = useState("");

  const [searchData, setSearchData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [countValue, setCountValue] = useState(0);
  const [isSkeleten, setIsSkeleten] = useState(true);

  const handleOnChangeOpen = (e) => {
    const { name, value } = e.target;
    setQuery(value);

    if (value.length >= 3) {
      onOpen();
      //   fetchResult(value);
    } else {
      setSearchData([]);
    }
  };
  const id = useRef(null);
  const debounce = (e, fetchResult, delay) => {

    const { name, value } = e.target;
    setQuery(value);

    if (value.length >= 3) {
      if (id.current) {
        clearTimeout(id.current);
      }
      id.current = setTimeout(function () {
        fetchResult(value);
      }, delay);
    }
  };
  const fetchResult = (query) => {
    axios
      .get(`https://onemgmasa.herokuapp.com/products/search?q=${query}`)
      .then((r) => {
       

        setSearchData(r.data);
      })
      .catch((e) => console.log("error", e.data));
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);
  useEffect(() => {
    if (query.length < 1) {
      setSearchData([]);
    }
  }, [query, setSearchData]);
  return (
    <div>
      <InputGroup flex={5}>
       
        <FiSearch fontSize={"20px"} color="gray.800" onClick={() => onOpen()} />
      </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay opacity={"0.5"} />
        <ModalContent
          // rounded={"24px 24px 5px 5px"}
          bg={"#f9f9f9"}
        >
          <Flex alignItems={"center"}>
            <ArrowBackIcon fontSize={"28px"} onClick={() => onClose()} />
            <Input
              type={"search"}
              variant="flushed"
              h={"50px"}
              p={"0 20px"}
              value={query}
              placeholder="Search for Medicines and Health Products"
              onChange={(e) => debounce(e, fetchResult, 600)}
            />
          </Flex>

          <ModalBody
            p={"0"}
            maxH={"90vh"}
            overflowX={"hidden"}
            overflowY={"auto"}
            className={styles.searchModelBody}
          >
            {searchData?.length == 0 ? (
              <>
                {query.length !== 0 && (
                  <Box fontSize={"14px"} textAlign={"center"} p={"10px 0"}>
                    No Results Found
                  </Box>
                )}
              </>
            ) : (
              <Box>
                {searchData?.map((item) => (
                  <SingleProduct
                    key={item._id}
                    item={item}
                    onClose={onClose}
                    setQuery={setQuery}
                  />
                ))}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MobileSearchBox;