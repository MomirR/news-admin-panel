import React, { useState, useEffect } from "react";
import { TabPanel, Spinner, PostCard, UserProfileShort } from "@components";
import { Typography, Grid, Divider, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { singleUserStyle } from "@assets/jss/";
import { useStyles, withTokenAxios } from "@hooks";

const SingleUser = props => {
  const classes = useStyles(singleUserStyle);
  const [state, setState] = useState({ user: null, value: 0 });

  useEffect(() => {
    const userId = props.match.params.id;
    const url = `user/getSingleUser/${userId}`;

    const getSingleUser = async () => {
      try {
        const response = await withTokenAxios.get(url);
        const userData = response.data;

        setState({ ...state, user: userData });
      } catch (error) {
        console.error(error);
      }
    };
    getSingleUser();
  }, []);

  const handleChange = (event, newValue) => {
    setState({ ...state, value: newValue });
  };

  if (!state.user) {
    return <Spinner />;
  }

  return (
    <Grid container direction="column">
      <UserProfileShort user={state.user.user} />
      <Grid item className={classes.infoUser}>
        <Grid container>
          <Grid item sm>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Email:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.email}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.emailConfirmed ? "Potvrđen" : "Nepotvrđen"}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Telefon:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.phone}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Drzava:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.country}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Grad:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.city}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Adresa:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Divider orientation="vertical" />

          <Grid item sm>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Poslednja prijava:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.lastLogin}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Poslednji IP:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.lastIpAddress}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" display="inline">
                  Status:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.user.user.accountStatus}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid item>
        <Tabs value={state.user.user.value} onChange={handleChange}>
          <Tab label="OBJAVE" id={"tab-0"} />
          <Tab label="SACUVANE OBJAVE" id={"tab-1"} />
          <Tab label="KOMENTARI" id={"tab-2"} />
        </Tabs>
      </Grid>
      <TabPanel value={state.value} index={0}>
        <Grid container spacing={3}>
          {state.user.posts.length > 0 ? (
            state.user.posts.map((post, index) => {
              return <PostCard post={post} key={post.id} />;
            })
          ) : (
            <Typography>No posts</Typography>
          )}
        </Grid>
      </TabPanel>
      {/* <TabPanel value={state.user.user.value} index={1}>
        {savedPosts}
      </TabPanel>
      <TabPanel value={state.user.user.value} index={2}>
        {comments}
      </TabPanel> */}
    </Grid>
  );
};

export default SingleUser;
