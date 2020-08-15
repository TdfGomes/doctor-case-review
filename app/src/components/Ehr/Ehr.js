import React, { useEffect, useRef } from "react";
import { Switch, useRouteMatch, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import ProtectedRoute from "../ProtectedRoute";
import Conditons from "./Conditions";
import Case from "./Case";
import NextCase from "./NextCase";
import AlertSuccess from "./AlertSuccess";

import { ACTIONS } from "../Store";

import { useStyles, useCases, useAppState } from "../../hooks";

function Ehr() {
  const { data, error, isFetching } = useCases();
  const [state, dispatch] = useAppState();
  const { path } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const cases = useRef(state.cases);

  useEffect(() => {
    if (data) {
      dispatch({ type: ACTIONS.GET_CASES, cases: data });
      const nextCase = data[cases.current.current]._id;
      history.push(`${path}/${nextCase}`);
    }
  }, [data, dispatch, history, path, cases]);

  if (isFetching) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Grid container className={classes.padH24} spacing={6}>
        {state.cases.current < state.cases.total ? (
          <>
            <Grid item xs={7}>
              <Switch>
                <ProtectedRoute path={`${path}/:id`}>
                  <Case />
                </ProtectedRoute>
              </Switch>
            </Grid>
            <Grid item xs={5}>
              <Conditons />
              <NextCase />
            </Grid>
          </>
        ) : (
          <AlertSuccess />
        )}
      </Grid>
    </>
  );
}

export default Ehr;
