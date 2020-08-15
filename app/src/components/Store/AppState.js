import React from "react";

export const AppStateContext = React.createContext();

export const ACTIONS = Object.freeze({
  LOGIN: "@APP/LOGIN",
  LOGOUT: "@APP/LOGOUT",
  GET_CASES: "@APP/GET_CASES",
  SELECT_CONDITION: "@APP/SELECT_CONDITION",
});

function appReducer(state, action) {
  console.log({ state, action });
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        doctor: {
          name: action.doctor,
          isLogedin: true,
        },
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        doctor: {
          name: null,
          isLogedin: false,
        },
      };
    case ACTIONS.GET_CASES:
      return {
        ...state,
        cases: action.cases,
      };
    case ACTIONS.SELECT_CONDITION:
      const { conditionId } = action;
      return {
        ...state,
        ehr: {
          ...state.ehr,
          conditionId,
        },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  doctor: {
    isLogedin: false,
    name: null,
  },
  cases: [],
  ehr: {
    conditionId: null,
    caseId: null,
  },
};

export function AppStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
