import React, { useState, useEffect } from "react";
import { Stack, Container, Flex } from "@chakra-ui/react";
import ChakaraLottie from "../../../src/assests/animations/chakraLottie.json";
import Lottie from "react-lottie";

/**
 * @componet
 * @return {React.ReactElemet} Loader component
 */

// default Options for lottie animation
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: ChakaraLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Loader = () => {
  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 480); // Desktop satate to determine screen size

  const updateMedia = () => {
    // updatae media function to set the updated desktop size
    setDesktop(window.innerWidth > 480);
  };

  // Effect to add event listener to window object to tringer resize method when screen size chanegs
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
      </Container>
    </>
  );
};

export default Loader;
