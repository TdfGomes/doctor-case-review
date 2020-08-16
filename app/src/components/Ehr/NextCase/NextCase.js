import React from "react";
import { useMutation } from "react-query";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles, useAppState } from "../../../hooks";
import { ACTIONS } from "../../Store";
import { createEhr } from "../../../utils/mutations";
import { useRouteMatch, useHistory } from "react-router-dom";

function NextCase() {
  const classes = useStyles();
  const [state, dispatch] = useAppState();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [mutate] = useMutation(createEhr);

  const {
    cases: { cases, current, total, caseId, conditionId },
  } = state;

  const handleClick = async () => {
    if (caseId && conditionId) {
      if (current < total) {
        try {
          const ehr = await mutate({
            caseId,
            conditionId,
          });
          console.log("EHR====> ", ehr);
          if (ehr.error)
            return dispatch({
              type: ACTIONS.POST_EHR_FAILED,
              error: ehr.message,
            });
          dispatch({ type: ACTIONS.POST_EHR });
        } catch (error) {
          console.error(error);
        }
      }
      if (current + 1 < total) {
        const nextCaseId = cases[current + 1]._id;
        history.push(`${url}/${nextCaseId}`);
      }
    }
  };

  return (
    <Box className={classes.btnWrapper}>
      <Button
        disableRipple
        variant="contained"
        color="primary"
        size="large"
        disabled={!caseId || !conditionId}
        onClick={handleClick}>
        Next Case
      </Button>
    </Box>
  );
}

export default NextCase;
