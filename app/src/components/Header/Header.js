import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useStyles, useAppState, useLogout } from "../../hooks";

function Username({ className }) {
  const [state] = useAppState();
  return (
    <Typography variant="body2" className={className} color="inherit">
      Login as: <u>{state.doctor.name}</u>
    </Typography>
  );
}

function Logout({ className }) {
  const logout = useLogout("/");

  const handleOnClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Button className={className} color="inherit" onClick={handleOnClick}>
      <b>Logout</b>
    </Button>
  );
}

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Username className={classes.headerItem} />
        <Logout className={classes.headerItem} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
