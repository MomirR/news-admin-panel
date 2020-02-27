import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { DefaultTheme } from "@assets/jss/main";
import { Router, Modal } from "@components";
import { ProfileContextProvider, UiContextProvider } from "@context";

const theme = DefaultTheme;
const App = () => {
  return (
    <ProfileContextProvider>
      <UiContextProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <Modal />
        </ThemeProvider>
      </UiContextProvider>
    </ProfileContextProvider>
  );
};

export default App;
