import React from "react";
import {
  Text,
  Flex,
  Avatar,
  Box,
  Show,
  Heading,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import AuthorAvart from "../../assests/images/author_avatar.jpg";

/**
 * @component
 * @return {React.ReactElement} Author Card
 */
const Author = () => {
  return (
    <>
      <Container maxW={"5xl"}>
        <Flex flexDirection={"row"}>
          <Show breakpoint="(min-width: 720px)">
            <Box>
              <Avatar size="2xl" name="Segun Adebayo" src={AuthorAvart} />
            </Box>
          </Show>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight={"110%"}
            >
              {/* Free{" "} */}
              <Text
                as={"span"}
                bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
                bgClip="text"
              >
                Hey, I am Dhruv Sharma
              </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              I created PsySpace library to help fellow psychonauts and everyone
              to get best resources from all around the web about psychedelics,
              harmreduction, psychedelic therapy and sensible rational use of
              psychedelics!{" "}
            </Text>
            <Box mt={2}>
              <Flex
                justifyContent={"left"}
                gap={5}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box>
                  {" "}
                  <Link isExternal href="https://twitter.com/dhashdev">
                    <Button
                      w={"full"}
                      maxW={180}
                      colorScheme={"messenger"}
                      leftIcon={<AiFillTwitterCircle />}
                    >
                      <Text>@dhashdev</Text>
                    </Button>
                  </Link>
                </Box>
                <Box>
                  {" "}
                  <Link href="mailto:dhruv@dhash.dev">
                    <Button
                      w={"full"}
                      maxW={180}
                      colorScheme={"messenger"}
                      leftIcon={<AiOutlineMail />}
                    >
                      <Text>dhruv@dhash.dev</Text>
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Author;
