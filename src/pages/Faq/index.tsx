import { Stack, Box } from "@chakra-ui/react";
import React from "react";
import Author from "../../components/Author";
import FaqSection from "../../components/FaqSection";

/**
 * @component
 * @return {React.ReactComponentElement} author and faq components
 */
const Faq = () => {
  return (
    <>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 10, md: 20 }}
        py={{ base: 20, md: 28 }}
      >
        <Box>
          <Author />
        </Box>
        <Box>
          <FaqSection />
        </Box>
        {/* <Box width={"100%"} height={"2px"} bgColor={"gray"} /> */}
      </Stack>
    </>
  );
};

export default Faq;
