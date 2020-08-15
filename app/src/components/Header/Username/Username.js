import React from "react";

import Typography from "@material-ui/core/Typography";

import { useAppState } from "../../../hooks";

function Username({ className }) {
  const [state] = useAppState();
  return (
    <Typography variant="body2" className={className} color="inherit">
      Login as: <u>{state.doctor.name}</u>
    </Typography>
  );
}

export default Username;
