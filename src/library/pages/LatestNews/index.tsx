import React, { useState, useEffect } from "react";
import { getPsyNews, psyNewsArticleShape } from "../../../utils/api/news-api";
import NewsCard from "../../components/NewsCard";
import SectionHeader from "../../components/SectionHeader";
import {
  Box,
  Text,
  useToast,
  Spinner,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";

const LatestNews = () => {
  const [news, setNews] = useState<psyNewsArticleShape | null>(null); // news article state
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true); // loading state
  const [error, setError]: [boolean, (error: boolean) => void] =
    useState(false);
  const toast = useToast(); // chakra ui toast to show error message

  useEffect(() => {
    // calling news api to get the latest news of today's date
    getPsyNews("psychedelics", 10)
      .then((data: psyNewsArticleShape) => {
        setNews(data as psyNewsArticleShape);
        setLoading(false);
        setError(false);
      })
      .catch((err: string) => {
        console.log("inside error", err);
        setLoading(false);
        setError(true);
        toast({
          title: `${err}`,
          description:
            "Something went wront while fetching the News! try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  }, []);
  return (
    <>
      <SectionHeader
        sectionHeading="Latest Psychedelic News"
        sectionBody="Catch up with what's happening latest around you in the feild of psychedelic science, research and entertainment feild! 🍄"
      />
      {loading === true ? (
        <>
          <Center p={10}>
            <Spinner size="xl" />
          </Center>
        </>
      ) : loading === false && error === false ? (
        news?.articles?.map((post) => {
          return (
            <Box key={post._id}>
              <NewsCard
                imgUrl={post.media}
                articleHeading={post.title}
                articleBody={post.summary}
                linkToArticle={post.link}
                articleAuthor={post.author}
                publishedAt={post.published_date}
              />
            </Box>
          );
        })
      ) : (
        <Center p={10}>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            <Text color="red">
              Something went wrong, please try again later!😢
            </Text>
            <Box>
              <Button
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                maxW={115}
                onClick={() => window.location.reload()}
                _hover={{ bg: "gray.800" }}
              >
                Reload
              </Button>
            </Box>
          </Flex>
        </Center>
      )}
    </>
  );
};

export default LatestNews;
