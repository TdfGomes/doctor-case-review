import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import { useStyles, useConditions } from "../../../hooks";

import ConditonItem from "./ConditionItem";

function Conditons() {
  const [selectedCondition, setCondition] = useState(null);
  const { data, error, isFetching } = useConditions();

  const classes = useStyles();

  const handleClick = (id) => {
    setCondition(id);
  };

  if (isFetching) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Typography variant="h6" className={classes.mb15}>
        Select Condition:
      </Typography>
      <Box className={classes.conditionBox} component="ul">
        {data.map(({ _id, description }) => {
          return (
            <ConditonItem
              key={_id}
              id={_id}
              condition={`${description} (${_id})`}
              isSelected={selectedCondition === _id}
              onClick={handleClick}
            />
          );
        })}
      </Box>
    </>
  );
}

export default Conditons;
