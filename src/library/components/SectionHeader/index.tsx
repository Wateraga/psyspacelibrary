import React from "react";
import { Box, Flex, Text, chakra, useColorModeValue } from "@chakra-ui/react";
// section header prop type
interface SectionHeaderTypes {
  sectionHeading: string;
  sectionBody: string;
}

const SectionHeader = ({ sectionHeading, sectionBody }: SectionHeaderTypes) => {
  return (
    <>
      <Flex
        p={{ base: 2, md: 50 }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("white", "gray.800")}
          maxW={"4xl"}
        >
          <Box mt={2}>
            <Text
              fontSize="2xl"
              fontWeight={600}
              lineHeight={"110%"}
              color="gray.700"
              _dark={{ color: " #86FBFB" }}
            >
              {sectionHeading}
            </Text>
            <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.300" }}>
              {sectionBody}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SectionHeader;
