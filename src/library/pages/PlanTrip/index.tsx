import React from "react";
import { Container } from "@chakra-ui/react";
import beginGuideData from "../../data/beginGuide.json";
import SectionHeader from "../../components/SectionHeader";
import PlanTripTimeline from "../../components/PlanTripTimeline";
// plan trip
const PlanTrip = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={beginGuideData.sectionHeading}
        sectionBody={beginGuideData.sectionHeadingDesc}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <PlanTripTimeline />
      </Container>
    </>
  );
};

export default PlanTrip;
