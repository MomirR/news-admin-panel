import React from "react";

import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from "@material-ui/core";

import { menuItemStyle } from "@assets/jss/";
import { useStyles } from "@hooks";

const MenuItem = ({ small = false, link }) => {
  const c = useStyles(menuItemStyle);
  if (small) {
    return (
      <Link>
        <ListItem button>
          <ListItemIcon>
            <Typography className={c.icons}>{link.name.charAt(0)}</Typography>
          </ListItemIcon>{" "}
        </ListItem>
      </Link>
    );
  }

  return (
    <Link>
      <ListItem button>
        <ListItemIcon>{link.icon}</ListItemIcon>
        <div className={c.listOfLinks}>
          <ListItemText disableTypography primary={link.name} />
        </div>
      </ListItem>
    </Link>
  );
};

export default MenuItem;
