import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcPlanner } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import PlanTripCard from "./PlanTripCard";

// plan trip types
interface planTripTypes {
  planTripDataArray: {
    stepName: string;
    stepNumber: number;
    stepDescription: string;
    detailedDescription: {
      pointNumber: number;
      point: string;
    }[];
    reference: string;
    referenceLink: string;
  }[];
}

/**
 * @component
 * @return {React.ReactElement} plan trip timeline
 */
const PlanTripTimeline = ({ planTripDataArray }: planTripTypes) => {
  return (
    <VerticalTimeline>
      {planTripDataArray.map((step) => {
        return (
          <VerticalTimelineElement
            key={step.stepNumber}
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "#86FBFB",
              color: "#fff",
            }}
            icon={<AiFillCheckCircle color="" />}
          >
            <PlanTripCard
              stepName={step.stepName}
              stepNumber={step.stepNumber}
              stepDescription={step.stepDescription}
              detailedDescription={step.detailedDescription}
              reference={step.reference}
              referenceLink={step.referenceLink}
            />
          </VerticalTimelineElement>
        );
      })}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FcPlanner />}
      />
    </VerticalTimeline>
  );
};

export default PlanTripTimeline;
