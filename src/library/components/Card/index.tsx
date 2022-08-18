import React from "react";
import { Box, Flex, Link, Text, chakra, Icon } from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";
// card props types
interface CardTypes {
  cardHeading: string;
  cardBody: string;
  linkTo?: string;
}

const Card = ({ cardHeading, cardBody, linkTo }: CardTypes) => {
  return (
    <>
      <Box
        w="full"
        // maxW={{ base: "" }}
        mx="auto"
        px={4}
        py={3}
        bg="white"
        h={"100%"}
        _dark={{ bg: "#3e3e3e" }}
        shadow="md"
        rounded="md"
      >
        <Box>
          {" "}
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color="gray.700"
            _dark={{ color: " #86FBFB" }}
          >
            {cardHeading}
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            {cardBody}
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="flex-end"
            mt={2}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Link
              cursor="pointer"
              textDecor="underline"
              color="brand.600"
              href={`${linkTo}`}
              isExternal
              _dark={{ color: "brand.400" }}
            >
              <Text letterSpacing={1} fontWeight="bold">
                Visit <Icon as={AiOutlineLink} />
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Card;
