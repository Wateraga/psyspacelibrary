import { Stack, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Author from "../../components/Author";
import FaqSection from "../../components/FaqSection";

/**
 * @component
 * @return {React.ReactComponentElement} author and faq components
 */
const Faq = () => {
  // Effect to scroll on top on inital load
  // ! Need to find an optimal solution for this, following is temporary solution
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
