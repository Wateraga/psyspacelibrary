import React from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  Stack,
  useColorMode,
  // Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import PsyLogo from "src/assests/images/PsySpace-logo-55x55.png";



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        backdropFilter="saturate(180%) blur(5px)"
        px={4}
        as="header"
        position="fixed"
        w="100%"
        zIndex="100"
        borderBottom="0.5px"
        borderColor="gray.100"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{
            base: "space-between",
            md: "space-around",
            lg: "space-aroung",
          }}
        >
          <Box>{/* <Image src={PsyLogo} alt="logo" /> */}logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                ></MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
