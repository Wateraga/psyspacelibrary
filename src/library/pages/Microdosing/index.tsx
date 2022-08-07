import React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import microdosingData from "../../data/microdosing.json";
import Card from "library/components/Card";
import SectionHeader from "library/components/SectionHeader";
const Microdosing = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={microdosingData.sectionHeading}
        sectionBody={microdosingData.sectionHeadingDesc}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
        >
          {microdosingData.post.map((post) => {
            return (
              <GridItem key={post.postHeading}>
                <Card cardHeading={post.postHeading} cardBody={post.postBody} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Microdosing;
