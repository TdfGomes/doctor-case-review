import React from "react";

export const AppStateContext = React.createContext();

export const ACTIONS = Object.freeze({
  LOGIN: "@APP/LOGIN",
  LOGOUT: "@APP/LOGOUT",
  GET_CASES: "@APP/GET_CASES",
  SELECT_CONDITION: "@APP/SELECT_CONDITION",
  POST_EHR: "@APP/POST_EHR",
  CURRENT_CASE: "@APP/CURRENT_CASE",
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
        cases: {
          ...state.cases,
          cases: action.cases,
          total: action.cases.length,
        },
      };
    case ACTIONS.CURRENT_CASE:
      return {
        ...state,
        cases: {
          ...state.cases,
          caseId: action.caseId,
          conditionId: null,
        },
      };
    case ACTIONS.SELECT_CONDITION:
      const { conditionId } = action;
      return {
        ...state,
        cases: {
          ...state.cases,
          conditionId,
        },
      };
    case ACTIONS.POST_EHR:
      return {
        ...state,
        cases: {
          ...state.cases,
          current: state.cases.current + 1,
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
  cases: {
    cases: [],
    current: 0,
    total: null,
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
