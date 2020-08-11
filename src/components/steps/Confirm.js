import React from 'react';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {WizardBottomNavigation} from '../WizardBottomNavigation';

const useStyles = makeStyles((theme) => ({
  smallContainer: {
    width: '60%',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },
}));

export const Confirm = ({nextStep, previousStep}) => {
  const classes = useStyles();

  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              style={{fontWeight: 'bold'}}
              gutterBottom
            >
              Sign & confirm
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sign and confirm your agreement
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        prevStepAction={previousStep}
        nextStepLabel="Send"
      />
    </div>
  );
};
