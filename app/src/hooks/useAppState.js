import { useContext } from "react";
import { AppStateContext } from "../components/Store";

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppStateProvider");
  }
  return context;
}
