import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  loginBox: {
    minHeight: "100vh",
  },
  loginButton: {
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

  listItem: {
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.primary,
      transition: `color ${theme.transitions.duration.standard} ${theme.transitions.easing.easeInOut}`,
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
  },
  addNew: {
    backgroundColor: theme.palette.grey["100"],
    padding: "5px 15px",
    border: `1px solid ${theme.palette.grey["300"]}`,
  },
  addNewBtn: {
    marginLeft: 5,
  },
}));
