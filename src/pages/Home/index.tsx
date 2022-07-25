import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import ChakaraLottie from "../../../src/assests/animations/chakraLottie.json";
import { Link } from "react-router-dom";
import About from "src/components/About";
import Newsletter from "src/components/Newsletter";
import OpensourceBanner from "src/components/OpensourceBanner";

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
            fontSize={{ base: "6xl", sm: "6xl", md: "8xl" }}
            lineHeight={"110%"}
          >
            {/* Free{" "} */}
            <Text
              as={"span"}
              bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
              bgClip="text"
            >
              PsySpace Library
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"} fontSize={{ md: "2xl" }}>
            PsySpace presents psyspace library, an opensource community driven
            project to bring curated resouces from all around the web about
            psychedelics and psychedelic use
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link to="/library/home">
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"#FF0080"}
                _hover={{ bg: "#86FBFB", textColor: "black" }}
              >
                Go to Library
              </Button>
            </Link>
            <Button
              rounded={"full"}
              px={6}
              onClick={() => window.location.replace("/#about")}
            >
              Learn more
            </Button>
          </Stack>
          {isDesktop ? (
            <Flex w={"full"}>
              <Lottie options={defaultOptions} width={450} height={450} />
            </Flex>
          ) : (
            <Flex w={"full"}>
              <Lottie options={defaultOptions} />
            </Flex>
          )}
        </Stack>
        <About />
        <OpensourceBanner />
        <Newsletter />
      </Container>
    </>
  );
};

export default Home;
