import React from "react";

const Bonbons = () => {

  const getTotalSteps = (children) => {
    let totalSteps = 0;
    children.forEach(child => {
      if(child.type.name === "StepList") {
        totalSteps = child.props.children.length - 1
      }
    });
    
  };
  return (
    <div>
      <BonbonCreate>

        <StepList activeStepIndex={0} totalSteps={3}>
          <Step isActive render={BoxSelection}/>
          <Step isDisabled render={BonbonSelection}/>
          <Step isDisabled render={GiftOptions}/>
        </StepList>

        <ButtonList>
          <Previous onPreviousStep={() => {}} isPreviousActive/>
          <Next onNextStep={() => {}} isNextActive/>
          <Submit handleSubmit={() => {}} isLastStep/>
        </ButtonList>

      </BonbonCreate>
    </div>
  );
};

export default Bonbons;