import React from "react";
import newsletterData from "../../data/newsletterList.json";
import SectionHeader from "../../components/SectionHeader";
import NewsletterCard from "../../components/NewsletterCard";
import { Grid, GridItem, Container } from "@chakra-ui/react";

/**
 * @components
 * @return {React.ReactComponentElement} newsletter collection
 */
const NewslettersCollection = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={newsletterData.sectionHeading}
        sectionBody={newsletterData.sectionHeadingDesc}
      />
      <Container maxW="5xl" my={{ base: 7, md: 5 }}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={{ base: 2, md: 5 }}
        >
          {newsletterData.post.map((data) => {
            return (
              <>
                <GridItem key={data.id}>
                  <NewsletterCard
                    image={data.image}
                    name={data.name}
                    socialProfile={data.socialProfile}
                    description={data.description}
                    hastags={data.hastags}
                    subscribeLink={data.subscribeLink}
                    followLink={data.followLinkg}
                  />
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default NewslettersCollection;
