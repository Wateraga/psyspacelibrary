import React from "react";
import {
  Text,
  Flex,
  Box,
  Heading,
  Container,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

/**
 * @component
 * @return {React.ReactElement} Author Card
 */

const FaqSection = () => {
  return (
    <>
      <Container maxW={"5xl"}>
        <Flex flexDirection={"column"} gap={8}>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>What is PsySpace Library? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              PsySpace Library is an open source project of{" "}
              <Link href="https://psyspace.in" isExternal color={"#FF0080"}>
                PsySpace,
              </Link>{" "}
              PsySpace is a community of people who are building tech based
              psychedelic spaces. PsySpace library is a community driven project
              for curated resources and guides about psychedelics use for
              various purposes.
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>What are Psychedelic Spaces? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              Psychedelic spaces are communities, projects, tools, resources,
              and software that are helping like-minded people (aka psychonauts)
              to come together, learn, educate and build more such tools and
              communities. Online tools that are helping the psychedelic scene
              as a whole and are promoting the benefits of psychedelics, harm
              reduction techniques, building communities for people, and
              promoting mental health benefits of psychoactive substances.
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>What are the plans for PsySpace Library? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              Initally started as a subreddit{" "}
              <Link
                href="https://www.reddit.com/r/psyspace/"
                isExternal
                color={"#FF0080"}
              >
                r/psyspace
              </Link>{" "}
              a community to discuss about the modern use of psychedelics and
              their integration in modern life and how technology can help us
              better understand the rational use of these substance, build more
              tools to promote harm reduction methods and for the betterment of
              the human existence!
            </Text>
            <Text mt={1} color={"gray.500"}>
              My long term plans for this website are to turn it into a goto
              place for the psychonauts and everyone to seek guidance about
              their psychedelic journies, mental health, healing, help others,
              share their journeys, incentivize the learnings, learn proper harm
              reduction tecniques and more.{" "}
              <Link href={"/library/home"} color={"#FF0080"}>
                A library about psychedelics
              </Link>{" "}
              and everything about them.
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>How did you build PsySpace Library? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              The project has been build with{" "}
              <Link href="https://reactjs.org" isExternal color={"#FF0080"}>
                reactjs
              </Link>{" "}
              it is an opensource library and can be found on{" "}
              <Link
                href="https://github.com/dhashdev/psyspacelibrary"
                color={"#FF0080"}
                isExternal
              >
                github.
              </Link>{" "}
              The project and the code is in vary nascent stage, the code
              quality and UI needs improvements and resources needs to be
              updated and new feature must be added ofcourse, hence it can be
              buggy to some extend, but that is where we need your help.
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>How does it make money? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              PsySpace Library does not make any money. I have been using my
              personal time and budget to build it. I did not create this
              website with any intentions of monetization but as a good will, to
              help other people in their own psychedelic journey, grow and know
              all the information requiered for harm reduction.
            </Text>{" "}
            <Text>
              If you want to sponsor my efforts you can{" "}
              <Link
                href="https://www.buymeacoffee.com/dhash"
                isExternal
                color={"#FF0080"}
              >
                Buy me a coffee
              </Link>{" "}
              or contact me at{" "}
              <Link href="mailto:dhruv@dhash.dev" color={"#FF0080"}>
                dhruv@dhash.dev
              </Link>{" "}
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>Can I contribute? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              You definitely can, infact you are encouraged to do that. Even
              your minor contributions such as typo fixes count. The source code
              of the website can be found on{" "}
              <Link
                href="https://github.com/dhashdev/psyspacelibrary"
                color={"#FF0080"}
                isExternal
              >
                Github.
              </Link>{" "}
              Your contributions can be:
            </Text>{" "}
            <Text mt={2} color={"gray.500"}>
              <UnorderedList>
                <ListItem>Writing guide</ListItem>
                <ListItem>Adding more resources</ListItem>
                <ListItem>Improving current resources</ListItem>
                <ListItem>
                  Working on issues in the issue section of github
                </ListItem>
                <ListItem>Refactoring codebase</ListItem>
                <ListItem>Updating User Interface</ListItem>
                <ListItem>
                  Fixing grammar mistakes, typos on the website or the content
                </ListItem>
                <ListItem>Spreading the word</ListItem>
                <ListItem>
                  Following on twitter{" "}
                  <Link
                    href="https://twitter.com/psyspacenetwork"
                    isExternal
                    color={"#FF0080"}
                  >
                    @psyspacenetwork
                  </Link>{" "}
                </ListItem>

                <ListItem>
                  Becoming a member on{" "}
                  <Link
                    href="https://www.reddit.com/r/psyspace/"
                    isExternal
                    color={"#FF0080"}
                  >
                    r/psyspace
                  </Link>{" "}
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
          <Box textAlign={"left"} px={{ base: 2, md: 8 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              <Text>How can I contact you? </Text>
            </Heading>
            <Text mt={2} color={"gray.500"}>
              You can contact on the following platforms:{" "}
            </Text>{" "}
            <Text mt={2} color={"gray.500"}>
              <UnorderedList>
                <ListItem>
                  twitter{" "}
                  <Link
                    href="https://twitter.com/dhashdev"
                    isExternal
                    color={"#FF0080"}
                  >
                    @dhashdev
                  </Link>{" "}
                </ListItem>
                <ListItem>
                  PsySpace twitter{" "}
                  <Link
                    href="https://twitter.com/psyspacenetwork"
                    isExternal
                    color={"#FF0080"}
                  >
                    @psyspacenetwork
                  </Link>{" "}
                </ListItem>
                <ListItem>
                  reddit{" "}
                  <Link
                    href="https://www.reddit.com/message/compose?to=%2Fr%2Fpsyspace"
                    isExternal
                    color={"#FF0080"}
                  >
                    r/psyspace
                  </Link>{" "}
                </ListItem>
                <ListItem>
                  Email{" "}
                  <Link href="mailto:dhruv@dhash.dev" color={"#FF0080"}>
                    dhruv@dhash.dev
                  </Link>{" "}
                </ListItem>
              </UnorderedList>
            </Text>{" "}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default FaqSection;
