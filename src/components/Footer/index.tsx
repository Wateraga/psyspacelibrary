import React, { ReactNode, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

import { BiMailSend } from "react-icons/bi";
import PsySpaceLogo from "../../assests/images/PsySpace-text-log-350x60.png";

//  Social media button component
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

//  List header to modify heading stylig for the column of itmes in the footer
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const [email, setEmail] = useState(""); // form input state
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Link to="https://psyspace.in">
                <Image src={PsySpaceLogo} alt="logo" />
              </Link>
            </Box>
            <Text fontSize={"sm"}>© 2022 PsySpace. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"reddit"}
                href={"https://www.reddit.com/r/psyspace/"}
              >
                <FaReddit />
              </SocialButton>

              <SocialButton label={"website"} href={"https://psyspace.in"}>
                <FaGlobe />
              </SocialButton>

              <SocialButton
                label={"website"}
                href={"https://twitter.com/psyspacenetwork"}
              >
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Link to={"/faq"}>FAQ</Link>
            <Link to={"#"}>Sponsor</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Link to={"/terms"}>Terms of Service</Link>
            <Link to={"/privacy"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <form
              action="https://www.getrevue.co/profile/PsySpace/add_subscriber"
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
            >
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                  id="member_email"
                  name="member[email]"
                  type={"email"}
                  required
                  aria-label={"Your Email"}
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </form>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
