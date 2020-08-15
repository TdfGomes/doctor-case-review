import React, { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

import { ACTIONS } from "../Store";

import { useStyles, useAppState } from "../../hooks";
import { requestLogin } from "../../utils/mutations";

function Login() {
  const [error, setError] = useState(false);
  const [, dispatch] = useAppState();

  const classes = useStyles();
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  // eslint-disable-next-line
  const [mutate, { _, reset }] = useMutation(requestLogin);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await mutate({
        email: email.current.value,
        password: password.current.value,
      });

      if (result?.error) {
        return setError(result.message);
      }

      dispatch({ type: ACTIONS.LOGIN, doctor: result.doctor });
      history.push("/ehr");
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnChange = () => {
    if (error) {
      reset();
      setError(false);
    }
  };

  return (
    <Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.loginBox}>
        <Grid item xs={4}>
          <Paper className={classes.pad15} elevation={3}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
              component="form"
              onSubmit={onSubmit}>
              <TextField
                inputRef={email}
                id="email"
                label="Email"
                margin="normal"
                type="email"
                fullWidth
                onChange={handleOnChange}
              />
              <TextField
                inputRef={password}
                id="password"
                type="password"
                label="Password"
                margin="normal"
                fullWidth
                onChange={handleOnChange}
              />
              <Button
                className={classes.loginButton}
                variant="contained"
                color="primary"
                fullWidth
                disableRipple
                type="submit">
                Login
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Login;
