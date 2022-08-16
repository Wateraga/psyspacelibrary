import React from "react";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface PlanTripCardTypes {
  stepName: string;
  stepNumber: number;
  stepDescription: string;
  detailedDescription: string;
}

const PlanTripCard = ({
  stepName,
  stepNumber,
  stepDescription,
  detailedDescription,
}: PlanTripCardTypes) => {
  return (
    <>
      <Heading _dark={{ color: "#86FBFB" }} as="h4" size="md">
        <Text
          as={"span"}
          bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
          bgClip="text"
        >
          {stepName}
        </Text>
      </Heading>
      <Heading as="h5" size="sm" _dark={{ color: "#000" }}>
        Step {stepNumber}
      </Heading>
      <Text _dark={{ color: "#000" }}>{stepDescription}</Text>
      <Box mt={2}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Tips for {stepName}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} _dark={{ color: "#000" }}>
              {detailedDescription}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default PlanTripCard;
