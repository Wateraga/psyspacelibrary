import React from "react";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  ListItem,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";

// Plan trip card types
interface PlanTripCardTypes {
  stepName: string;
  stepNumber: number;
  stepDescription: string;
  detailedDescription: {
    pointNumber: number;
    point: string;
  }[];
  reference: string;
  referenceLink: string;
}
/**
 *
 * @component
 * @return {React.ReactElement} plan trip single card
 */
const PlanTripCard = ({
  stepName,
  stepNumber,
  stepDescription,
  detailedDescription,
  reference,
  referenceLink,
}: PlanTripCardTypes) => {
  return (
    <>
      <Heading color={"black"} as="h4" size="md">
        {stepName}
      </Heading>{" "}
      <Text
        as={"span"}
        bgGradient={"linear(to-l, #86FBFB, #FF0080)"}
        bgClip="text"
        fontWeight="bold"
      >
        Step {stepNumber}
      </Text>
      <Text _dark={{ color: "#000" }}>{stepDescription}</Text>
      <Box mt={2}>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton _dark={{ color: "#000" }}>
              <Box flex="1" textAlign="left">
                Tips for {stepName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} _dark={{ color: "#000" }}>
              <UnorderedList _dark={{ color: "#000" }}>
                {detailedDescription.map((point) => {
                  return (
                    <Box key={point.pointNumber}>
                      <ListItem>{point.point}</ListItem>
                    </Box>
                  );
                })}
              </UnorderedList>
              <Box>
                <Text>
                  Reference:{" "}
                  <Link isExternal href={`${referenceLink}`} color="#FF0080">
                    {reference}
                  </Link>
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default PlanTripCard;
