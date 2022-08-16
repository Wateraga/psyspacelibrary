import React from "react";
import { Box } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcPlanner } from "react-icons/fc";
import { BsFillBagCheckFill } from "react-icons/bs";
import PlanTripCard from "./PlanTripCard";
import planTripData from "../../data/planTrip.json";
const planTripDataArray = planTripData.planTripSteps; // extracting array from trip data
// plan trip
const PlanTripTimeline = () => {
  return (
    <Box>
      <VerticalTimeline>
        {planTripDataArray.map((step) => {
          return (
            <VerticalTimelineElement
              key={step.stepNumber}
              className="vertical-timeline-element--work"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<BsFillBagCheckFill color="" />}
            >
              <PlanTripCard
                stepName={step.stepName}
                stepNumber={step.stepNumber}
                stepDescription={step.stepDescription}
                detailedDescription={step.detailedDescription}
              />
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FcPlanner />}
        />
      </VerticalTimeline>
    </Box>
  );
};

export default PlanTripTimeline;
