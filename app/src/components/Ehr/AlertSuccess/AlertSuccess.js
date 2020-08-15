import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { useStyles } from "../../../hooks";
import Header from "../../Header";

function AlertSuccess() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container className={classes.padH24} spacing={6}>
        <Grid item xs={12}>
          <Alert severity="success" classes={{ icon: classes.alertIcon }}>
            <AlertTitle>
              <Typography variant="h4">You are Done</Typography>
            </AlertTitle>
            Thanks for your work <strong>See you soon!</strong>
          </Alert>
        </Grid>
      </Grid>
    </>
  );
}

export default AlertSuccess;
