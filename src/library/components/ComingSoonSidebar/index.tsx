import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface ComingSoonTypes extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const ComingSoonSidebar = ({ icon, children, ...rest }: ComingSoonTypes) => {
  return (
    <>
      <Box>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color={"gray.500"}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="18" as={icon} />}
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default ComingSoonSidebar;
