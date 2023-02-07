import React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import guideData from "../../data/guide.json";
import InfoCard from "../../../library/components/InfoCard";
import SectionHeader from "../../../library/components/SectionHeader";

/**
 * @component
 * @return {React.ReactElement} guide
 */
const Guide = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={guideData.sectionHeading}
        sectionBody={guideData.sectionHeadingDesc}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 2, md: 5 }}
        >
          {guideData.post.map((post) => {
            return (
              <GridItem key={post.id}>
                {/* <Card
                  cardHeading={post.postHeading}
                  cardBody={post.postBody}
                  linkTo={post.link} 
                />*/}
                <InfoCard
                  heading={post.postHeading}
                  description={post.postBody}
                  redirectLink={post.link}
                  image={post.image}
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
