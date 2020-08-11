import {useState} from 'react';
import {Info} from '../components/steps/Info';
import {Bank} from '../components/steps/Bank';
import {LoanDetails} from '../components/steps/LoanDetails';
import {Terms} from '../components/steps/Terms';
import {Confirm} from '../components/steps/Confirm';
import {Done} from '../components/steps/Done';

export const useSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      name: 'info',
      displayName: 'פרטים אישיים',
      component: Info,
    },
    {
      name: 'confirm',
      displayName: 'אישור',
      component: Confirm,
    },
    {
      name: 'done',
      displayName: 'סיום',
      component: Done,
    },
  ];

  return {
    steps,
    activeStep,
    nextStep: () => setActiveStep((currentStep) => currentStep + 1),
    previousStep: () => setActiveStep((currentStep) => currentStep - 1),
    isLastStep: () => activeStep === steps.length - 1,
  };
};
