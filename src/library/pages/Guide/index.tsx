import React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import guideData from "../../data/guide.json";
import Card from "../../../library/components/Card";
import SectionHeader from "../../../library/components/SectionHeader";

const Guide = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={guideData.sectionHeading}
        sectionBody={guideData.sectionHeadingDesc}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
        >
          {guideData.post.map((post) => {
            return (
              <GridItem key={post.id}>
                <Card
                  cardHeading={post.postHeading}
                  cardBody={post.postBody}
                  linkTo={post.link}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Guide;
