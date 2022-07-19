import React from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import ChakaraLottie from "../../assests/animations/chakraLottie.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "../About";
import Newsletter from "../Newsletter";

//default Options for lottie animation
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: ChakaraLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = () => {
  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 480); // Desktop satate to determine screen size

  const updateMedia = () => {
    // updatae media function to set the updated desktop size
    setDesktop(window.innerWidth > 480);
  };

  //Effect to add event listener to window object to tringer resize method when screen size chanegs
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Meeting scheduling{" "}
            <Text as={"span"} color={"orange.400"}>
              made easy
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link to="/library">
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
              >
                Get started
              </Button>
            </Link>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
          {isDesktop ? (
            <Flex w={"full"}>
              <Lottie options={defaultOptions} width={500} height={500} />
            </Flex>
          ) : (
            <Flex w={"full"}>
              <Lottie options={defaultOptions} />
            </Flex>
          )}
        </Stack>
        <About />
        <Newsletter />
      </Container>
    </>
  );
};

export default Home;
