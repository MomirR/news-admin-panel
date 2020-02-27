import React, { createContext, useReducer } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const initialState = {
    singleUser: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "userdata":
        return {
          ...state,
          singleUser: action.profile
        };
      case "setUserRole":
        return {
          ...state,
          userRole: action.role
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
