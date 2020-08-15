import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { useStyles } from "../../../hooks";

function AlertSuccess() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Alert severity="success" classes={{ icon: classes.alertIcon }}>
        <AlertTitle>
          <Typography variant="h4">You are Done</Typography>
        </AlertTitle>
        Thanks for your work <strong>See you soon!</strong>
      </Alert>
    </Grid>
  );
}

export default AlertSuccess;
