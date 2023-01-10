import React from "react";
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Flex,
} from "@chakra-ui/react";

// stepcard prop types
interface StepCardTypes {
  stepHeading: string;
  stepBody: {
    articleNumber: number;
    articleName: string;
    articleLink: string;
  }[];
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
          <Flex flexDirection="column" alignItems="flex-start">
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
              fontWeight={600}
              lineHeight={"110%"}
              color="gray.700"
              _dark={{ color: " #86FBFB" }}
            >
              {stepHeading}
            </Text>
            <Box
              textAlign="left"
              lineHeight="2"
              mt={2}
              color="gray.600"
              _dark={{ color: "gray.300" }}
            >
              <UnorderedList>
                {stepBody.map((article) => {
                  return (
                    <Box key={article.articleNumber}>
                      <Link isExternal href={`{${article.articleLink}}`}>
                        <ListItem>{article.articleName}</ListItem>
                      </Link>
                    </Box>
                  );
                })}
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default StepCard;
