import React from "react";

import Button from "@material-ui/core/Button";

import { useLogout } from "../../../hooks";

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

export default Logout;
