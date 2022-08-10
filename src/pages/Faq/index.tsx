import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Author from "../../components/Author";
const About = () => {
  return (
    <>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Author />
        </Stack>
      </Container>
    </>
  );
};

export default About;
