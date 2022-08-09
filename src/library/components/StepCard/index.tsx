import React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";

// stepcard prop types
interface StepCardTypes {
  stepHeading: string;
  stepBody: string;
}
const StepCard = ({ stepHeading, stepBody }: StepCardTypes) => {
  return (
    <>
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="xl"
        shadow="lg"
        bg="white"
        _dark={{ bg: "#3e3e3e" }}
        minW={{ base: "100%", md: "3xl" }}
      >
        <Box mt={2}>
          <Text
            fontSize="2xl"
            fontWeight={600}
            lineHeight={"110%"}
            color="gray.700"
            _dark={{ color: " #86FBFB" }}
          >
            {stepHeading}
          </Text>
          <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.300" }}>
            {stepBody}
          </chakra.p>
        </Box>
      </Box>
    </>
  );
};

export default StepCard;
