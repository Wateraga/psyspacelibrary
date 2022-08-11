import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { TbMushroom } from "react-icons/tb";
import { Link } from "react-router-dom";
import data from "../../data/about.json";
const featureList = data.feature;

/**
 * @component
 * @return {React.ReactElement} About page
 */
const About = () => {
  return (
    <Box p={4} id="about">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight={800}>
          About{" "}
          <Text
            as={"span"}
            bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
            bgClip="text"
          >
            PsySpace
          </Text>{" "}
          Library
        </Heading>
        <Text color={"gray.600"} fontSize={{ md: "2xl" }}>
          PsySpace library aims to provides you with all the latest and up to
          date resources to learn and educate yourself about the sensible use of
          psychedelics
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {featureList.map((feature) => (
            <Link to={feature.to} key={feature.id}>
              <HStack
                key={feature.id}
                align={"top"}
                _hover={{ borderColor: "#FF0080" }}
                border="1px"
                borderColor="gray.200"
                borderRadius={20}
                p={6}
              >
                <Box color={"#FF0080"} px={2}>
                  <Icon as={TbMushroom} w={6} h={6} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
      <Stack
        pt={{ base: 10, md: 16 }}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
      >
        <Flex justifyContent={"center"}>
          <Button rounded={"full"} width={{ base: "40", md: "60" }}>
            And More
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default About;
