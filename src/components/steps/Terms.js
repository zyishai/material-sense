import React, {useState} from 'react';
import {createBooleanValue} from 'react-values';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {WizardBottomNavigation} from '../WizardBottomNavigation';

const useStyles = makeStyles((theme) => ({
  bigContainer: {
    width: '80%',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },
}));

export const Terms = ({nextStep, previousStep}) => {
  const classes = useStyles();
  const [termsChecked, setTermsChecked] = useState(false);

  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div style={{marginBottom: 24}}>
          <Typography
            variant="subtitle1"
            style={{fontWeight: 'bold'}}
            gutterBottom
          >
            Terms & Conditions
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please read through and accept the terms & conditions
          </Typography>
        </div>
        <div
          style={{
            height: 330,
            padding: 16,
            border: '2px solid #ccc',
            borderRadius: '3px',
            overflowY: 'scroll',
          }}
        >
          <Typography
            variant="subtitle1"
            style={{fontWeight: 'bold'}}
            gutterBottom
          >
            1. Your agreement
          </Typography>
          <Typography variant="body1" gutterBottom>
            By using this Site, you agree to be bound by, and to comply with,
            these Terms and Conditions. If you do not agree to these Terms and
            Conditions, please do not use this site. PLEASE NOTE: We reserve the
            right, at our sole discretion, to change, modify or otherwise alter
            these Terms and Conditions at any time. Unless otherwise indicated,
            amendments will become effective immediately. Please review these
            Terms and Conditions periodically. Your continued use of the Site
            following the posting of changes and/or modifications will
            constitute your acceptance of the revised Terms and Conditions and
            the reasonableness of these standards for notice of changes. For
            your information, this page was last updated as of the date at the
            top of these terms and conditions.
          </Typography>
          <Typography
            variant="subtitle1"
            style={{fontWeight: 'bold'}}
            gutterBottom
          >
            2. Privacy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please review our Privacy Policy, which also governs your visit to
            this Site, to understand our practices. By using this Site, you
            agree to be bound by, and to comply with, these Terms and
            Conditions. If you do not agree to these Terms and Conditions,
            please do not use this site. PLEASE NOTE: We reserve the right, at
            our sole discretion, to change, modify or otherwise alter these
            Terms and Conditions at any time. Unless otherwise indicated,
            amendments will become effective immediately. Please review these
            Terms and Conditions periodically. Your continued use of the Site
            following the posting of changes and/or modifications will
            constitute your acceptance of the revised Terms and Conditions and
            the reasonableness of these standards for notice of changes. For
            your information, this page was last updated as of the date at the
            top of these terms and conditions.
          </Typography>
        </div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                value="check"
              />
            }
            label="I have read and understood the terms & conditions"
          />
        </FormGroup>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        prevStepAction={previousStep}
        nextStepDisabled={!termsChecked}
        nextStepLabel="Accept"
      />
    </div>
  );
};
