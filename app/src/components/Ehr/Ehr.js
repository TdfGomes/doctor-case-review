import React, { useEffect } from "react";
import { Switch, useRouteMatch, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import ProtectedRoute from "../ProtectedRoute";
import Header from "../Header";
import Conditons from "./Conditions";
import Case from "./Case";

import { ACTIONS } from "../Store";

import { useStyles, useCases, useAppState } from "../../hooks";

function Ehr() {
  const { data, error, isFetching } = useCases();
  const [, dispatch] = useAppState();
  const { path } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (data) {
      dispatch({ type: ACTIONS.GET_CASES, cases: data });
      const nextCase = data[0]._id;
      history.push(`${path}/${nextCase}`);
    }
  }, [data, dispatch, history, path]);

  if (isFetching) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Header />
      <Grid container className={classes.padH24} spacing={6}>
        <Grid item xs={7}>
          <Switch>
            <ProtectedRoute path={`${path}/:id`}>
              <Case />
            </ProtectedRoute>
          </Switch>
        </Grid>
        <Grid item xs={5}>
          <Conditons />
        </Grid>
      </Grid>
    </>
  );
}

export default Ehr;
