import React from "react";
import { Stack, Heading, Container, Flex, Box } from "@chakra-ui/react";

/**
 * @component
 * @return {React.ReactElement} Newsletter
 */

const Newsletter = () => {
  return (
    <Flex minH={"300"} align={"center"} justify={"center"}>
      <Container
        maxW={"lg"}
        boxShadow={"xl"}
        rounded={"lg"}
        mb="10"
        _dark={{ bgColor: "#fff" }}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          _dark={{ color: "#1a202d" }}
          mt="10"
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack direction={{ base: "column" }}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box w="100" h="320">
              <iframe
                src="https://psyspace.substack.com/embed"
                height="300"
              ></iframe>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
};
export default Newsletter;
