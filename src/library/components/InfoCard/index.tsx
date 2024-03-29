import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Link,
  Stack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { BsLink45Deg } from "react-icons/bs";
// Info Card Component

// Info Card prop types
interface CardTypes {
  image: string;
  heading: string;
  redirectLink: string;
  description: string;
}

const InfoCard = ({ image, heading, redirectLink, description }: CardTypes) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        h={380}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {heading}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"}>
            {description}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Link href={redirectLink} isExternal>
              <Button
                leftIcon={<BsLink45Deg />}
                colorScheme="teal"
                variant="solid"
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default InfoCard;
