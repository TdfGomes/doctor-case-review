import React from "react";
import { useParams } from "react-router-dom";
import { useAppState, useStyles } from "../../../hooks";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function Case() {
  const { id } = useParams();
  const [state] = useAppState();
  const classes = useStyles();

  const newCase = state.cases.find(({ _id }) => _id === id)?.description;
  const caseToRender = newCase?.split(/\n/).filter((c) => c);

  return (
    <>
      <Typography variant="h6" className={classes.mb15}>
        Please review this case:
      </Typography>
      <Typography variant="body1">{caseToRender && caseToRender[0]}</Typography>
      <List>
        {caseToRender?.slice(1).map((c, idx) => (
          <ListItem key={idx}>{c}</ListItem>
        ))}
      </List>
    </>
  );
}

export default Case;
