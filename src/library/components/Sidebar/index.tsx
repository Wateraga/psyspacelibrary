import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useColorMode,
  Button,
  Image,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import { TbArrowLeft } from "react-icons/tb";
import { Link as Linkk } from "react-router-dom";
import { IconType } from "react-icons";
import { LinkItems } from "../sidebarData/sidebarData";
import PsySpaceLogo from "../../../assests/images/PsySpace-text-log-350x60.png";
import ComingSoonSidebar from "../ComingSoonSidebar";
import { ComingSoonItems } from "../sidebarData/sidebarData";
import SocialButton from "../SocialButton";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

/**
 *
 * @component
 * @return {ReactElement} sidebar (library index)
 */
const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Box
          minH="100vh"
          minW="100vw"
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      top="0"
      bottom="0"
      pos="fixed"
      overflowY="scroll"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          <Flex gap={5}>
            <Box pt={{ base: 3, md: 2 }}>
              <Linkk to="/">
                <TbArrowLeft />
              </Linkk>
            </Box>
            <Box>
              <Image
                src={PsySpaceLogo}
                alt="logo"
                width={{ base: 40, md: 60 }}
              />
            </Box>
          </Flex>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Linkk to={link.link} key={link.name}>
          <NavItem icon={link.icon} onClick={onClose}>
            {link.name}
          </NavItem>
        </Linkk>
      ))}
      <Box mt="2">
        <Divider />
      </Box>
      <Flex flexDirection="column" mt={4}>
        <Box textAlign={"center"}>
          <Text fontSize={{ base: "lg", md: "lg" }} fontWeight={"bold"}>
            Coming Soon !!
          </Text>
        </Box>
        <Box>
          {ComingSoonItems.map((link) => (
            <ComingSoonSidebar icon={link.icon} key={link.name}>
              {link.name}
            </ComingSoonSidebar>
          ))}
        </Box>
      </Flex>

      <Divider />
      <Flex justifyContent={"center"} my={4} gap={3}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Box mt={2}>
          <Text color={"gray.500"} fontSize={{ base: "lg", md: "md" }}>
            Switch to {colorMode === "light" ? <>Dark</> : <>Light</>} mode
          </Text>
        </Box>
      </Flex>
      <Center>
        <Box mt={2}>
          <Flex flexDirection="column" alignItems={"center"} gap="2">
            <Box>
              <Text fontSize={"md"}>Other Virtual Existences</Text>
            </Box>
            <Stack direction={"row"} spacing={2}>
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
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "#86FBFB",
        color: "black",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "black",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>{" "}
      </Box>
    </Flex>
  );
};

export default Sidebar;
