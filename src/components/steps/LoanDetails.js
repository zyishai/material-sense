import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import numeral from 'numeral';
import {WizardBottomNavigation} from '../WizardBottomNavigation';

numeral.defaultFormat('0,000');

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
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    paddingBottom: 24,
    marginBottom: 24,
  },
  formControl: {
    width: '100%',
  },
}));

export const LoanDetails = ({
  queryParams,
  labelWidth,
  nextStep,
  previousStep,
}) => {
  const classes = useStyles();
  const [repaimentAccount, setRepaimentAccount] = useState('Saving Account');

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
              Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              We need some details about any information
            </Typography>
          </div>
          <div>
            <Button
              variant="outlined"
              size="large"
              className={classes.outlinedButtom}
            >
              Edit
            </Button>
          </div>
        </div>
        <div className={classes.borderColumn}>
          <Grid item container xs={12} style={{marginBottom: 32}}>
            <Grid item xs={6}>
              <Typography
                style={{textTransform: 'uppercase'}}
                color="secondary"
                gutterBottom
              >
                Amount
              </Typography>
              <Typography variant="h5" gutterBottom>
                {queryParams ? numeral(queryParams.amount).format() : '75,000'}{' '}
                DKK
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{textTransform: 'uppercase'}}
                color="secondary"
                gutterBottom
              >
                Total fees
              </Typography>
              <Typography variant="h5" gutterBottom>
                0 DKK
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Typography
                style={{textTransform: 'uppercase'}}
                color="secondary"
                gutterBottom
              >
                Total price
              </Typography>
              <Typography variant="h5" gutterBottom>
                {queryParams ? numeral(queryParams.interest).format() : '6,600'}{' '}
                USD
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{textTransform: 'uppercase'}}
                color="secondary"
                gutterBottom
              >
                Total cost
              </Typography>
              <Typography variant="h5" gutterBottom>
                {queryParams ? numeral(queryParams.cost).format() : '81,600'}{' '}
                USD
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid item container xs={12}>
          <Grid item container xs={12} style={{marginBottom: 32}}>
            <Grid item xs={6}>
              <Typography
                style={{textTransform: 'uppercase'}}
                color="secondary"
                gutterBottom
              >
                How often
              </Typography>
              <Typography variant="h5" gutterBottom>
                Once a month
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{textTransform: 'uppercase'}}
              color="secondary"
              gutterBottom
            >
              When to start
            </Typography>
            <Typography variant="h5" gutterBottom>
              01 February 2019
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{textTransform: 'uppercase'}}
              color="secondary"
              gutterBottom
            >
              When it ends?
            </Typography>
            <Typography variant="h5" gutterBottom>
              01 May 2019
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} style={{marginTop: 24}}>
          <Grid item xs={6}>
            <Typography
              style={{
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
              color="secondary"
              gutterBottom
            >
              Destination account
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={repaimentAccount}
                onChange={(e) => setRepaimentAccount(e.target.value)}
                input={
                  <OutlinedInput
                    labelWidth={labelWidth}
                    name="repaimentAccount"
                  />
                }
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={'0297 00988200918'}>Account one</MenuItem>
                <MenuItem value={'0235 00235233332'}>Account two</MenuItem>
                <MenuItem value={'1256 00864222212'}>Other account</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        prevStepAction={previousStep}
      />
    </div>
  );
};
