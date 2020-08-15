import { useHistory } from "react-router-dom";
import { useAppState } from "./useAppState";
import { ACTIONS } from "../components/Store";

export function useLogout(path) {
  const history = useHistory();
  const [, dispatch] = useAppState();

  return () => {
    localStorage.removeItem("token");
    dispatch({ type: ACTIONS.LOGOUT });
    history.push(path);
  };
}
