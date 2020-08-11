import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
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
  formControl: {
    width: '100%',
  },
}));

export const Bank = ({labelWidth, nextStep, previousStep}) => {
  const classes = useStyles();
  const [receivingAccount, setReceivingAccount] = useState('Home Account');

  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <div>
          <div style={{marginBottom: 32}}>
            <Typography
              variant="subtitle1"
              style={{fontWeight: 'bold'}}
              gutterBottom
            >
              Bank information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Select account to receive the money
            </Typography>
          </div>
          <div style={{marginBottom: 32}}>
            <Typography
              style={{textTransform: 'uppercase'}}
              color="secondary"
              gutterBottom
            >
              Bank
            </Typography>
            <Typography variant="h5" gutterBottom>
              N26
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
              color="secondary"
              gutterBottom
            >
              Receiving account
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={receivingAccount}
                onChange={(e) => setReceivingAccount(e.target.value)}
                input={
                  <OutlinedInput
                    labelWidth={labelWidth}
                    name="receivingAccount"
                  />
                }
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={'0297 00988200918'}>First account</MenuItem>
                <MenuItem value={'0235 00235233332'}>Second account</MenuItem>
                <MenuItem value={'1256 00864222212'}>Third account</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Paper>

      <WizardBottomNavigation
        nextStepAction={nextStep}
        prevStepAction={previousStep}
      />
    </div>
  );
};
