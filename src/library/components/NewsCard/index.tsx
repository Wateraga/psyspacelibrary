import React from "react";
import { Box, Flex, Link, Text, chakra } from "@chakra-ui/react";
import moment from "moment";
//NewCard prop types
interface NewCardTypes {
  imgUrl: string;
  articleHeading: string;
  articleBody: string;
  linkToArticle: string;
  articleAuthor?: string;
  publishedAt: string;
}

const NewsCard = ({
  imgUrl,
  articleHeading,
  articleBody,
  linkToArticle,
  articleAuthor,
  publishedAt,
}: NewCardTypes) => {
  return (
    <>
      <Flex
        p={{ base: 2, md: 50 }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "4xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ base: "xl", lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              m={4}
              h={{ base: 64, lg: "90%" }}
              rounded={{ base: "lg", lg: "lg" }}
              bgSize="cover"
              style={{
                backgroundImage: `url("${imgUrl}")`,
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}
          >
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
            >
              {articleHeading}
            </chakra.h2>
            <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
              {articleBody}
            </chakra.p>

            <Box mt={8}>
              <Flex justifyContent="space-between" direction="column">
                <Link
                  bg="gray.900"
                  color="gray.100"
                  px={5}
                  py={3}
                  fontWeight="semibold"
                  rounded="lg"
                  href={`${linkToArticle}`}
                  isExternal
                  maxW={120}
                  _hover={{ bg: "gray.800" }}
                >
                  Read Now
                </Link>
                <Box mt={2}>
                  <Flex direction="column">
                    <Text fontSize="sm" color="grey" as="i">
                      by:{" "}
                      {articleAuthor
                        ? articleAuthor
                        : // .substring(0, articleAuthor.indexOf(","))
                          "unknown"}
                    </Text>
                    <Text fontSize="sm" color="grey" as="i">
                      {moment(publishedAt).format("MMMM Do YYYY")}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default NewsCard;
