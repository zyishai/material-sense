import React from 'react';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

export const Done = ({nextStep}) => {
  const classes = useStyles();

  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Congratulations{' '}
              <span role="img" aria-label="conrats emoji">
                🎉
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              We have now a positive response
            </Typography>
            <Button fullWidth variant="outlined">
              Download the service invoice or whatever
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        nextStepLabel="Done"
        showPrevStep={false}
      />
    </div>
  );
};
