import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  //   Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// newsletter card types
interface NewsletterCardType {
  image: string;
  name: string;
  socialProfile: string;
  description: string;
  hastags: string[];
  subscribeLink: string;
  followLink: string;
}

/**
 *
 * @comonents
 * @return {React.ReactComponentElement} newsletter collection
 *
 */
export default function NewsletterCard({
  image,
  name,
  socialProfile,
  description,
  hastags,
  subscribeLink,
  followLink,
}: NewsletterCardType) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%" }}
        // height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            borderRadius={10}
            boxSize="100%"
            src={image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            @{socialProfile}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={1}
            fontSize="sm"
          >
            {description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {hastags.map((tag) => {
              return (
                <>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #{tag}
                  </Badge>
                </>
              );
            })}
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link href={followLink}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Follow
              </Button>
            </Link>
            <Link href={subscribeLink}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Subscribe
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
