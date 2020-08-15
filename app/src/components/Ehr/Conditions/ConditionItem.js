import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import { useStyles, useAppState } from "../../../hooks";
import { ACTIONS } from "../../Store";

function ConditionItem({ condition, id, onClick, isSelected }) {
  const classes = useStyles();
  const [, dispatch] = useAppState();

  const className = !isSelected
    ? `${classes.conditionItem}`
    : `${classes.conditionItem} ${classes.itemIsSelected}`;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SELECT_CONDITION, conditionId: id });
    return onClick(id);
  };

  return (
    <Typography
      variant="body1"
      component="li"
      className={className}
      onClick={handleClick}>
      {condition}
    </Typography>
  );
}

ConditionItem.propTypes = {
  id: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ConditionItem;
