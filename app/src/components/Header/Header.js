import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Username from "./Username";
import Logout from "./Logout";

import { useStyles } from "../../hooks";

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Username className={classes.headerItem} />
        {"|"}
        <Logout className={classes.headerItem} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
