import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";

import { UserAvatar } from "@components";
import { useStyles } from "@hooks";
import { userProfileShortStyle as style } from "@assets/jss";

const UserProfileShort = ({ user }) => {
  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedIn: LinkedIn
  };

  const classes = useStyles(style);
  return (
    <Grid container>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item className={classes.personalData}>
            <Typography>
              {user.firstName} {user.lastName}
            </Typography>
          </Grid>
          <Grid item className={classes.userRole}>
            <Typography>{user.role}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.imageAndAbout}>
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={1} md={2} sm={3} xs={10}>
            <UserAvatar
              firstName={user.firstName}
              lastName={user.lastName}
              imageSrc={user.avatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item md={4}>
            <Grid container direction="column">
              <Typography>{user.description}</Typography>
              <Grid container style={{ marginTop: 15 }}>
                {user.socialAccounts.length > 0
                  ? user.socialAccounts.map(socialAccount => {
                      const Icon = icons[socialAccount.name];
                      if (!Icon) {
                        return null;
                      }

                      return (
                        <Grid item md={1} key={socialAccount._id}>
                          <IconButton
                            onClick={() =>
                              window.open(socialAccount.link, "_blank")
                            }
                          >
                            <Icon />
                          </IconButton>
                        </Grid>
                      );
                    })
                  : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfileShort;
