import React from "react";
import { Flex, Container, Button, Heading } from "@chakra-ui/react";
import beginGuideData from "../../data/beginGuide.json";
import SectionHeader from "../../components/SectionHeader";
import StepCard from "../../components/StepCard";
import { Step, Steps, useSteps } from "chakra-ui-steps";

// number of steps with description
const steps = [
  { label: "Step 1", description: "Step 1 description" },
  { label: "Step 2", description: "Step 2 description" },
  { label: "Step 3", description: "Step 3 description" },
];

// content component to render different steps
const Contents = ({ index }: { index: number }) => {
  const stepNumber = (indexN: number) => {
    switch (indexN) {
      case 0:
        return (
          <StepCard
            stepHeading={beginGuideData.post[indexN].postHeading}
            stepBody={beginGuideData.post[indexN].postBody}
          />
        );
      case 1:
        return (
          <StepCard
            stepHeading={beginGuideData.post[indexN].postHeading}
            stepBody={beginGuideData.post[indexN].postBody}
          />
        );
      case 2:
        return (
          <StepCard
            stepHeading={beginGuideData.post[indexN].postHeading}
            stepBody={beginGuideData.post[indexN].postBody}
          />
        );
    }
  };
  return <>{stepNumber(index)}</>;
};

// Beginner Guide
const BeginGuide = () => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });
  return (
    <>
      <SectionHeader
        sectionHeading={beginGuideData.sectionHeading}
        sectionBody={beginGuideData.sectionHeadingDesc}
      />
      <Container maxW="4xl" my={{ base: 7, md: 5 }}>
        <Flex flexDir="column" width="100%">
          <Steps
            labelOrientation="horizontal"
            orientation="vertical"
            onClickStep={(step: number) => setStep(step)}
            activeStep={activeStep}
            colorScheme="cyan"
          >
            {steps.map(({ label, description }, index) => (
              <Step label={label} key={label} description={description}>
                <Contents index={index} />
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <Flex px={4} py={4} width="100%" flexDirection="column">
              <Heading fontSize="xl" textAlign="center">
                Woohoo! All steps completed!
              </Heading>
              <Button mx="auto" mt={6} size="sm" onClick={reset}>
                Reset
              </Button>
            </Flex>
          ) : (
            <Flex width="100%" justify="flex-end">
              <Button
                isDisabled={activeStep === 0}
                mr={4}
                onClick={prevStep}
                size="sm"
                variant="ghost"
              >
                Prev
              </Button>
              <Button size="sm" onClick={nextStep}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Flex>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default BeginGuide;
