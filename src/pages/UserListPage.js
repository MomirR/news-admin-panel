import React, { useState, useEffect, Fragment, useContext } from "react";
import { useHistory } from "react-router";
import { useStyles, withTokenAxios } from "@hooks";
import {
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Hidden,
  Link
} from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Formik, Form } from "formik";
import {
  UserListItem,
  Pagination,
  Spinner,
  Modal,
  CustomButton
} from "@components";
import { UiContext } from "@context";

import { userListPageStyle } from "@assets/jss";

const UserListPage = () => {
  const [state, setState] = useState({
    users: null,
    totalPages: null,
    totalUsers: null
  });

  const context = useContext(UiContext);

  const [query, setQuery] = useState({
    role: "admin",
    sort: "newest",
    page: 1
  });
  const [error, setError] = useState({ msg: null, err: false });

  const c = useStyles(userListPageStyle);
  const history = useHistory();

  const fetchUsers = async () => {
    const users = await withTokenAxios.get(
      `/user/users?page=${query.page}&role=${query.role}`
    );

    setState({
      ...state,
      users: users.data.usersPaginated,
      totalUsers: users.data.numberOfUsers,
      totalPages: Math.ceil(users.data.numberOfUsers / 5)
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        fetchUsers();
      } catch (error) {
        if (error) {
          let errorMsg = "Došlo je do greške!";
          if (error.response.data.error === "jwt expired") {
            localStorage.removeItem("token");
            history.push("/login");
            errorMsg = "Sesija istekla!";
          }
          setError({ ...error, err: true, msg: errorMsg });
        }

        console.log(error.response.data.error);
      }
    };

    getUsers();
  }, [query]);

  const updateQueryPage = page => setQuery({ ...query, page });
  const updateQueryRole = role => setQuery({ ...query, role, page: 1 });
  const updateQuerySort = sort => setQuery({ ...query, sort });

  const deleteUser = async id => {
    // setState({ ...state, userToDelete: user });
    context.dispatch({ type: "toogleModal" });
    try {
      await withTokenAxios.post("/user/deleteaccount", {
        id
      });

      context.dispatch({
        type: "toogleSnackbar",
        message: "Uspešno",
        variant: "success"
      });

      fetchUsers();
    } catch (err) {
      context.dispatch({
        type: "toogleSnackbar",
        message: "Došlo je do greške, molimo pokušajte ponovo!",
        variant: "error"
      });
    }
  };

  const userTable = state.users ? (
    <Grid container spacing={3} direction="column">
      <Grid item container>
        <Grid className={c.styledGrid} container item justify="center">
          <Grid
            item
            lg={8}
            md={10}
            sm={8}
            xs={12}
            container
            spacing={3}
            justify="space-between"
            alignItems="center"
            alignContent="space-between"
            className={c.wrapUserDiv}
          >
            <Hidden xsDown>
              <Grid item lg={1} md={1} sm={2} xs={2}></Grid>
              <Grid item lg={2} md={2} sm={3} xs={8}>
                <Typography variant="body2" align="left">
                  Ime
                </Typography>
              </Grid>

              <Grid item lg={2} md={2} sm={3}>
                <Typography variant="body2" align="left">
                  Rola
                </Typography>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item lg={2} md={2}>
                <Typography variant="body2" align="left">
                  Pozicija
                </Typography>
              </Grid>
              <Grid item lg={2} md={2}>
                <Typography variant="body2" align="left">
                  Status
                </Typography>
              </Grid>
              <Grid item lg={3} md={2}>
                <Typography variant="body2" align="left">
                  Poslednji login
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
            xs={12}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item>
        {state.users.map((row, index) => (
          <UserListItem
            key={index}
            row={row}
            isAdmin={query.role === "admin"}
            updateQuery={() => fetchUsers()}
            actions={[]}
            deleteUser={deleteUser}
            dispatch={context.dispatch}
          />
        ))}
      </Grid>
      <Pagination
        page={query.page}
        totalPages={state.totalPages}
        handlePageClick={page => updateQueryPage(page)}
      />
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/user/adduser">
            <AddCircleIcon fontSize="large" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Spinner />
  );

  if (error.err)
    return (
      <Modal opened={error.err} handleClose={() => history.push("/login")}>
        <Typography variant="h5">{error.msg}</Typography>
        <CustomButton
          variant="default"
          handleClick={() => history.push("/login")}
        >
          Nazad na login
        </CustomButton>
      </Modal>
    );

  return (
    <Fragment>
      <Typography variant="h1">Korisnici</Typography>
      <Formik>
        {() => (
          <Form>
            <Grid container spacing={3} justify="flex-end" alignItems="center">
              <Grid item className={c.sortAndFilterBar}>
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <Typography align="right">Role</Typography>
                  </Grid>
                  <Grid item>
                    <FormControl variant="outlined">
                      <Select
                        className={c.selectBox}
                        fullWidth
                        value={query.role}
                        onChange={e => updateQueryRole(e.target.value)}
                        inputProps={{
                          name: "role",
                          id: "role"
                        }}
                      >
                        {/* <MenuItem value={}>
                        Sve
                      </MenuItem> */}
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"visitor"}>Visitor</MenuItem>
                        <MenuItem value={"manager"}>Manager</MenuItem>
                        <MenuItem value={"journalist"}>Journalist</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={c.sortAndFilterBar}>
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <Typography align="right">Sortiraj</Typography>
                  </Grid>
                  <Grid item>
                    <FormControl variant="outlined">
                      <Select
                        className={c.selectBox}
                        fullWidth
                        value={query.sort}
                        onChange={e => updateQuerySort(e.target.value)}
                        inputProps={{
                          name: "sort",
                          id: "sort"
                        }}
                      >
                        {/* <MenuItem value={"Select"}>Select</MenuItem> */}
                        <MenuItem value={"newest"}>Najnovije</MenuItem>
                        <MenuItem value={"lastLogin"}>Poslednji login</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      {userTable}
    </Fragment>
  );
};
export default UserListPage;
