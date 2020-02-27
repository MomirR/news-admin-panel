import React from "react";
import { Link } from "react-router-dom";
import { Popper, Button, Divider } from "@material-ui/core";

import { Logout, UserAvatar, } from "@components";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { popperStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const PopperMenu = (props) => {
  // const {imageSrc ,firstName, lastName} = props
  const classes = useStyles(popperStyle);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;


  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        {/* <AccountCircle /> */}
        <UserAvatar
        // imageSrc={imageSrc} 
        // firstName={firstName} 
        // lastName={lastName}
        />
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        className={classes.popperPosition}
      >
        <div className={classes.arrowUp}></div>
        <div className={classes.paper}>
          <Link to="/mojnalog" className={classes.linkButton}>
            <Button className={classes.accountButton}>MOJ NALOG</Button>
          </Link>
          <Link to="/podesavanja" className={classes.linkButton}>
            <Button className={classes.settingsButton}>PODESAVANJA</Button>
          </Link>
          <Divider />
          <Logout />
        </div>
      </Popper>
    </div>
  );
};

export default PopperMenu;
