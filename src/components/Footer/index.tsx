import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  SimpleGrid,
  Link as Linkk,
  Stack,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SocialButton from "../../library/components/SocialButton";
import PsySpaceLogo from "../../assests/images/PsySpace-text-log-350x60.png";

//  List header to modify heading stylig for the column of itmes in the footer
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  // const [email, setEmail] = useState(""); // form input state
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
              <SocialButton
                label={"instagram"}
                href={"https://www.instagram.com/psyspace.network/"}
              >
                <FaInstagram />
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

            <Box>
              <Linkk href="https://psyspace.substack.com/" isExternal>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  textDecoration={"none"}
                >
                  Subscribe to PsySpace Newsletter
                </Button>
              </Linkk>
            </Box>
            <Box>
              <Linkk href="https://www.reddit.com/r/psyspace/" isExternal>
                <Button
                  leftIcon={<FaReddit />}
                  colorScheme="teal"
                  variant="solid"
                  textDecoration={"none"}
                >
                  Join r/PsySpace Community
                </Button>
              </Linkk>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
