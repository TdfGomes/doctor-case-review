import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  loginBox: {
    minHeight: "100vh",
  },
  loginButton: {
    width: "100%",
    marginTop: 35,
    marginBottom: 15,
  },
  pad15: {
    padding: 15,
  },
  mb15: {
    marginBottom: 15,
  },
  padH24: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  appBar: {
    marginBottom: 55,
  },
  toolbar: {
    justifyContent: "flex-end",
  },
  headerItem: {
    textTransform: "uppercase",
    "&:first-child": {
      marginRight: 8,
    },
  },
  conditionBox: {
    border: `1px solid ${theme.palette.primary.light}`,
    padding: "15px 20px",
    height: 300,
    overflow: "scroll",
    listStyle: "none",
    margin: 0,
  },
  conditionItem: {
    marginBottom: 5,
    cursor: "pointer",
  },
  itemIsSelected: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  btnWrapper: {
    marginTop: 35,
    marginBottom: 35,
    textAlign: "right",
  },
  alertIcon: {
    fontSize: 55,
  },
}));
