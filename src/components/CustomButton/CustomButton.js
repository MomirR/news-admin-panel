import React from "react";
import { Button } from "@material-ui/core";
import { customButtonStyle } from "@assets/jss";
import { useStyles } from "@hooks";
import PropTypes from "prop-types";

const CustomButton = ({ variant, handleClick, children }) => {
  const c = useStyles(customButtonStyle);
  let classes;
  if (variant) classes = variant;
  return (
    <Button className={c[classes]} onClick={() => handleClick()}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string,
  handleClick: PropTypes.func
};

export default CustomButton;
