import { makeStyles } from "@material-ui/core/";
import { useContext } from "react";
export const useStyles = style => makeStyles(style)();

export const useModal = () => {
  const context = useContext();
};
