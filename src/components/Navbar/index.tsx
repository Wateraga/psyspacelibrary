import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PsyLogo from "src/assests/images/PsySpace-logo-100x100.png";
import PsyTextLogo from "src/assests/images/PsySpace-text-log-350x60.png";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          {isDesktop ? (
            <Box>
              <Image
                src={PsyTextLogo}
                alt="logo"
                width={{ base: 40, lg: 40 }}
              />
            </Box>
          ) : (
            <Box>
              <Image src={PsyLogo} alt="logo" w={39} />
            </Box>
          )}

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
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
};

export default Navbar;
