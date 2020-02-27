import React from "react";
import PropTypes from "prop-types";

import { Box } from "@material-ui/core";


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    // console.log(props);
    return (
      <Box
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        value={value}
        {...other}
      >
        {children}
      </Box>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

export default TabPanel;