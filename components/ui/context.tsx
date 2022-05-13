// types for context
// default values
// Create a context
// Provide the context
// Consume the context

import { createContext, FC, useContext, useReducer, useMemo } from "react";

// Interface for function that will be responsible to close
// and open sidebar
export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

// Statevalue is interface for the value of the sate
export interface StateValues {
  isSidebarOpen: boolean;
}

// stateModifier object that will contain the actual function
// to open and close the sidebar
// Initial State
const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

// initial sitate
const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

// React.createContext CREATE CONTEXT: UI Context is the context for the current state that is defaultState
// State modifiers and initial State is the default values. Provider bata value pass
// vayena vane matrai yo default values use hunxa
const UIContext = createContext({
  ...stateModifiers,
  ...initialState,
});
type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        isSidebarOpen: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        isSidebarOpen: false,
      };
    }
  }
}

// Context.provider - PROVIDE THE CONTEXT to all of _app.js
// UIProvider wraps all the pages. This function wraps all the
// components in _app.js so that the sidebar functionalities is available
// down the components tree. Yo chai basic implementation of context ho.
// Lecture 123. UI Provider.
export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = useMemo(() => {
    return { ...state, openSidebar, closeSidebar };
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
// context.consumer CONSUME CONtEXT TO USE IN COMPONENTS
// Lecture 123: UI Provider
// Function that will provide the context to other components to consume it.
export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
