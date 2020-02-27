import React, { createContext, useReducer } from "react";
import { isMobile } from "@util";

export const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const initialState = {
    sidebarOpen: !isMobile() ? true : false,
    modal: {
      open: false,
      type: "",
      props: {}
    },
    snackbar: {
      open: false,
      message: null,
      variant: null
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toogleSidebar":
        return {
          ...state,
          sidebarOpen: !state.sidebarOpen
        };
      case "toogleModal":
        return {
          ...state,
          modal: {
            open: !state.modal.open,
            type: action.modalType,
            props: action.modalProps || state.modal.props
          }
        };
      case "toogleSnackbar":
        return {
          ...state,
          snackbar: {
            open: !state.snackbar.open,
            message: action.message,
            variant: action.variant
          }
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
