import React from "react";
import { Stack, Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import MushroomSvg from "../../components/Icons/Mushroom";
/**
 * @page
 * @return {React.ReactElement} Not found page
 */
const NotFound = () => {
  return (
    <>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Flex
            justifyContent={"center"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "5xl", sm: "5xl", md: "8xl" }}
              lineHeight={"110%"}
            >
              {/* Free{" "} */}
              <Text
                as={"span"}
                bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
                bgClip="text"
              >
                :( Page Not Found !
              </Text>
            </Heading>
            <Box display="flex" justifyContent="center" mt={2}>
              <MushroomSvg />
            </Box>
          </Flex>{" "}
        </Stack>
      </Container>
    </>
  );
};

export default NotFound;
