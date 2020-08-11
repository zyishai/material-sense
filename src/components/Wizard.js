import React, {useState, useEffect} from 'react';
import {
  useLocation,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Back from './common/Back';
import {Info} from './steps/Info';
import {Bank} from './steps/Bank';
import {LoanDetails} from './steps/LoanDetails';
import {Terms} from './steps/Terms';
import {Confirm} from './steps/Confirm';
import {Done} from './steps/Done';
import {makeStyles} from '@material-ui/core';
import * as qs from 'query-string';
import backgroundShape from '../images/shape.svg';
import {useSteps} from '../hooks/use-steps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary['A100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 10,
    padding: 20,
    paddingBottom: 200,
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  bigContainer: {
    width: '80%',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  stepLabel: {
    display: 'flex',
    flexDirection: 'column !important',
    alignItems: 'center !important',
  },
  iconContainer: {
    paddingRight: 0,
  },
}));

const Wizard = () => {
  const classes = useStyles();
  const {steps, nextStep, previousStep, activeStep} = useSteps();
  const location = useLocation();
  const history = useHistory();
  const {path, url} = useRouteMatch();
  const [labelWidth] = useState(0);

  useEffect(() => {
    const stepUrl = steps[activeStep].name.toLowerCase().replace(/ /g, '-');
    history.push(`${url}/${stepUrl}`);
  }, [activeStep]);

  const parsed = location.search ? qs.parse(location.search) : {};

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={10}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Back />
              <div className={classes.stepContainer}>
                <div className={classes.bigContainer}>
                  <Stepper
                    classes={{root: classes.stepper}}
                    activeStep={activeStep}
                  >
                    {steps.map(({name, displayName}) => {
                      return (
                        <Step key={name}>
                          <StepLabel
                            className={classes.stepLabel}
                            classes={{
                              iconContainer: classes.iconContainer,
                            }}
                          >
                            {displayName}
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>

                <Switch>
                  <Route
                    path={`${path}/info`}
                    component={() => (
                      <Info nextStep={nextStep} previousStep={previousStep} />
                    )}
                  />
                  <Route
                    path={`${path}/bank`}
                    component={() => (
                      <Bank
                        labelWidth={labelWidth}
                        nextStep={nextStep}
                        previousStep={previousStep}
                      />
                    )}
                  />
                  <Route
                    path={`${path}/loan-details`}
                    component={() => (
                      <LoanDetails
                        queryParams={parsed}
                        labelWidth={labelWidth}
                        nextStep={nextStep}
                        previousStep={previousStep}
                      />
                    )}
                  />
                  <Route
                    path={`${path}/terms`}
                    component={() => (
                      <Terms nextStep={nextStep} previousStep={previousStep} />
                    )}
                  />
                  <Route
                    path={`${path}/confirm`}
                    component={() => (
                      <Confirm
                        nextStep={nextStep}
                        previousStep={previousStep}
                      />
                    )}
                  />
                  <Route
                    path={`${path}/done`}
                    component={() => (
                      <Done
                        nextStep={() => {
                          history.push({
                            pathname: '/dashboard',
                            search: location.search,
                          });
                        }}
                      />
                    )}
                  />
                </Switch>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Wizard;
