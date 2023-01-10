/* eslint-disable */
import React, { useEffect } from "react";
import useExternalScript from "../../hooks/useExternalScript";
import {
  Text,
  Heading,
  useColorModeValue,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";

declare global {
  interface Window {
    CustomSubstackWidget: any;
  }
}

window.CustomSubstackWidget = window.CustomSubstackWidget || {};

const NewsletterBanner = () => {
  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "psyspace.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#FF0080",
        input: "#fff",
        email: "#000",
        text: "#000000",
      },
    };
  }, []);
  useExternalScript("https://substackapi.com/widget.js");
  return (
    <>
      <Flex minH={"150"} align={"center"} justify={"center"}>
        <Container
          maxW={"lg"}
          boxShadow={"xl"}
          rounded={"lg"}
          mb="5"
          p={5}
          bg={useColorModeValue("white", "gray.800")}
        >
          <Box mb={2}>
            <Heading
              as={"h2"}
              fontSize={{ base: "xl", sm: "2xl" }}
              textAlign={"center"}
            >
              Subscribe to our Newsletter
            </Heading>
            <Text color={"gray.600"} textAlign={"center"}>
              Be part of a community of people who share your interests 🍄 !
            </Text>
          </Box>
          <Flex justifyContent={"center"}>
            <div id="custom-substack-embed"></div>{" "}
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default NewsletterBanner;
