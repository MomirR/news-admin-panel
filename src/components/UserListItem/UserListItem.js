import React, { useState, Fragment } from "react";
import { Avatar, Typography, Grid, Link, Hidden } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { useStyles } from "@hooks";
import { userStyle } from "@assets/jss";
import { MySnackbarContentWrapper } from "@components";
// import { withTokenAxios } from "@hooks";

const UserListItem = ({ row, updateQuery, isAdmin, deleteUser, dispatch }) => {
  const c = useStyles(userStyle);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: null,
    variant: null
  });

  const toogleModal = () => {
    dispatch({
      type: "toogleModal",
      modalType: "deleteUser",
      modalProps: { user: row, handleClick: deleteUser }
    });
  };

  const snackbarContent = snackbar.open ? (
    <MySnackbarContentWrapper
      onClose={() => setSnackbar({ ...snackbar, open: false })}
      variant={snackbar.variant}
      message={snackbar.message}
      isOpen={snackbar.open}
    />
  ) : (
    ""
  );
  let onlyAdminIcons = isAdmin ? (
    <Fragment>
      {" "}
      <Grid item>
        <Link href={`/edit-profile/${row._id}`}>
          <EditIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link onClick={toogleModal}>
          <DeleteIcon />
        </Link>
      </Grid>{" "}
    </Fragment>
  ) : null;

  return (
    <Grid className={c.styledGrid} container>
      <Grid item container justify="center">
        <Grid
          item
          lg={8}
          md={10}
          sm={8}
          xs={10}
          container
          spacing={3}
          justify="space-between"
          alignItems="center"
          alignContent="center"
          className={c.wrapUserDiv}
        >
          <Grid item lg={1} md={1} sm={2} xs={2}>
            <Link href="/userprofile" className={c.wrapLink}>
              <Avatar
                className={c.styledAvatar}
                alt={row.firstName}
                src={row.avatar}
              />
            </Link>
          </Grid>

          <Grid item lg={2} md={2} sm={3} xs={8}>
            <Typography align="left">
              {row.firstName + " " + row.lastName}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item lg={2} md={2} sm={3} xs={4}>
              <Typography>{row.role}</Typography>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item lg={2} md={2}>
              <Typography>{row.position}</Typography>
            </Grid>
            <Grid item lg={2} md={2}>
              <Typography>{row.accountStatus}</Typography>
            </Grid>
            <Grid item lg={3} md={2}>
              <Typography>
                <Moment format="DD.MM.YY">{row.lastLogin}</Moment> u{" "}
                <Moment format="H:m">{row.lastLogin}</Moment>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          lg={4}
          md={2}
          sm={4}
          xs={2}
          alignItems="center"
          justify="flex-end"
          className={c.iconsBar}
        >
          <Grid item>
            <Link href={`/singleuser/${row._id}`}>
              <VisibilityIcon />
            </Link>
          </Grid>
          {onlyAdminIcons}
        </Grid>
      </Grid>
      {snackbarContent}
    </Grid>
  );
};

UserListItem.propTypes = {
  row: PropTypes.object,
  isAdmin: PropTypes.bool
};
export default UserListItem;
