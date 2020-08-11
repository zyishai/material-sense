import React from 'react';
import {makeStyles, Checkbox, FormControlLabel} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42,
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
}));

export const Info = ({nextStep, previousStep}) => {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div className={classes.topInfo}>
          <div>
            <Typography
              variant="subtitle1"
              style={{fontWeight: 'bold'}}
              gutterBottom
            >
              פרטים אישיים
            </Typography>
            <Typography variant="body1" gutterBottom>
              פרטים כלליים של הפציינט
            </Typography>
          </div>
          <div>
            <Button
              variant="outlined"
              size="large"
              className={classes.outlinedButtom}
            >
              עריכה
            </Button>
          </div>
        </div>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography
              style={{textTransform: 'uppercase'}}
              color="secondary"
              variant="caption"
              gutterBottom
            >
              שם פציינט
            </Typography>
            <Typography variant="body1" gutterBottom>
              ישראל ישראלי
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{textTransform: 'uppercase'}}
              color="secondary"
              variant="caption"
              gutterBottom
            >
              מין
            </Typography>
            <FormControlLabel control={<Checkbox></Checkbox>} label="זכר" />
            <FormControlLabel control={<Checkbox></Checkbox>} label="נקבה" />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        prevStepAction={previousStep}
      />
    </div>
  );
};
