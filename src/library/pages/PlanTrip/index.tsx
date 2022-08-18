import React from "react";
import { Container } from "@chakra-ui/react";
import SectionHeader from "../../components/SectionHeader";
import PlanTripTimeline from "../../components/PlanTripTimeline";
import planTripData from "../../data/planTrip.json";
const planTripDataArray = planTripData.planTripSteps;
/**
 * @component
 * @return {React.ReactElement} plan trip component
 */
const PlanTrip = () => {
  return (
    <>
      <SectionHeader
        sectionHeading={planTripData.planTripHeading}
        sectionBody={planTripData.planTripBody}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <PlanTripTimeline planTripDataArray={planTripDataArray} />
      </Container>
    </>
  );
};

export default PlanTrip;
