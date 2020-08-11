import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  flexBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const WizardBottomNavigation = ({
  nextStepAction,
  prevStepAction,
  nextStepLabel = 'Next',
  prevStepLabel = 'Back',
  nextStepDisabled = false,
  prevStepDisabled = false,
  showNextStep = true,
  showPrevStep = true,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.flexBar}>
      {showPrevStep && (
        <Button
          onClick={prevStepAction}
          disabled={prevStepDisabled}
          className={classes.backButton}
          size="large"
        >
          {prevStepLabel}
        </Button>
      )}
      {showNextStep && (
        <Button
          variant="contained"
          color="primary"
          onClick={nextStepAction}
          size="large"
          disabled={nextStepDisabled}
        >
          {nextStepLabel}
        </Button>
      )}
    </div>
  );
};
