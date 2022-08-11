import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
const OpensourceBanner = () => {
  return (
    <Box p={4} mb={30} mt={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"4xl"} fontWeight={800}>
          Open Source
        </Heading>
        <Text color={"gray.600"} fontSize={{ md: "xl" }}>
          This project is OpenSource, if you like the project please take a
          momemt to star it on Github via link below, this would help the
          project to grow!
        </Text>
        <Box>
          <Stack direction="column" spacing={8} justifyContent={"center"}>
            <Link href="https://github.com/dhashdev/psyspacelibrary" isExternal>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
                leftIcon={<AiFillGithub size={30} />}
                _hover={{ bg: "#86FBFB", textColor: "black" }}
              >
                Star on Github
              </Button>
            </Link>
            <Text color={"gray.600"} fontSize={{ md: "xl" }}>
              The project is actively looking for contributors hence if you are
              a developer and would like to contribute in any way, you are most
              welcome! General audience can submit resource suggestions too from
              link below.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={5}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link
                href="https://github.com/dhashdev/psyspacelibrary/tree/main/contributing"
                isExternal
              >
                <Button
                  rounded={"full"}
                  width={{ base: "40", md: "60" }}
                  px={6}
                  leftIcon={<AiFillGithub size={30} />}
                >
                  Contribute
                </Button>
              </Link>
              <Button rounded={"full"} width={{ base: "40", md: "60" }} px={6}>
                Submit a Resouce
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default OpensourceBanner;
