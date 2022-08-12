import React, { ChangeEvent, useState } from "react";
import {
  Stack,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";

/**
 * @component
 * @return {React.ReactElement} Newsletter
 */

const Newsletter = () => {
  const [email, setEmail] = useState(""); // form input state

  const revueConfigValue: string = process.env
    .REACT_APP_REVUE_PROFILE_NAME as string; // getting api end point from env

  console.log(25, revueConfigValue);
  return (
    <Flex minH={"300"} align={"center"} justify={"center"}>
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack direction={{ base: "column" }} spacing={"12px"}>
          <form
            action={`${revueConfigValue}`}
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <Flex gap={2} justifyContent={"center"} alignItems={"center"}>
              <Box>
                <Input
                  width={"100%"}
                  variant={"solid"}
                  borderWidth={1}
                  color={"gray.800"}
                  _placeholder={{
                    color: "gray.400",
                  }}
                  borderColor={useColorModeValue("gray.300", "gray.700")}
                  id="member_email"
                  name="member[email]"
                  type={"email"}
                  required
                  placeholder={"Your Email"}
                  aria-label={"Your Email"}
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </form>
        </Stack>
        <Box textAlign={"center"}>
          <Text mt={4}>You will not receive any spam! ✌️</Text>
        </Box>
      </Container>
    </Flex>
  );
};
export default Newsletter;
