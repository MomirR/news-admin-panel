import React, { useState, Fragment } from "react";
import {
  Button,
  Grid,
  Typography,
  Link,
  Select,
  MenuItem,
  FormControl,
  Hidden
} from "@material-ui/core/";
import { TextInput, CheckboxInput } from "@forms/inputs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { CustomButton } from "@components";
import { createCategoryPageStyle } from "@assets/jss";
import { InputWithLabel, SelectInput } from "@forms/inputs";
import { withTokenAxios, useStyles } from "@hooks";
const CreatecategoryPage = () => {
  const c = useStyles(createCategoryPageStyle);
  const [state, setState] = useState({
    name: "",
    description: "",
    layout: 1,
    homeOrder: 1,
    home: false,
    sidebar: false,
    type: 1
  });
  const layouts = [
    { name: "Layout1", id: 1 },
    { name: "Layout2", id: 2 },
    { name: "Layout3", id: 3 }
  ];
  const kursnaLista = [
    { name: "Kursna lista", id: 1 },
    { name: "Najcitanije", id: 2 }
  ];
  const redosled = [
    { name: "1", id: 1 },
    { name: "2", id: 2 },
    { name: "3", id: 3 },
    { name: "4", id: 4 },
    { name: "5", id: 5 },
    { name: "6", id: 6 },
    { name: "7", id: 7 }
  ];
  const initialValues = {
    name: "",
    description: "",
    layout: 1,
    homeOrder: 1,
    home: "",
    type: 1
  };

  const handleSubmit = async ({
    name,
    description,
    layout,
    homeOrder,
    home
  }) => {
    console.log();
  };
  const handleSelectChange = e => {
    console.log("e", e.target);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const toggleHome = () => {
    setState({ ...state, home: !state.home });
  };
  const toggleSidebar = () => {
    setState({ ...state, sidebar: !state.sidebar });
  };
  let homeOrder = state.home ? (
    <div>
      {" "}
      <Grid item>
        <Typography className={c.label} variant="caption">
          Redosled:
        </Typography>
      </Grid>
      <Grid item>
        <Field
          className={`${c.w100} ${c.textfiled}`}
          name="homeOrder"
          options={redosled}
          value={state.homeOrder}
          handleChange={e => handleSelectChange(e)}
          component={SelectInput}
        />
      </Grid>{" "}
    </div>
  ) : (
    ""
  );
  let type = state.sidebar ? (
    <div>
      {" "}
      <Grid item>
        <Typography className={c.label} variant="caption">
          Tip:
        </Typography>
      </Grid>
      <Grid item>
        <Field
          className={`${c.w100} ${c.textfiled}`}
          name="type"
          options={kursnaLista}
          value={state.type}
          handleChange={e => handleSelectChange(e)}
          component={SelectInput}
        />
      </Grid>
    </div>
  ) : (
    ""
  );

  console.log("state", state);
  return (
    <Fragment>
      <Typography variant="h1">Dodavanje nove kategorije</Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={loginValidationSchema}
      >
        {values => (
          <Form>
            {/* Name */}
            <Grid container direction="column" spacing={2}>
              <Grid item lg={5} md={8} sm={12} xs={12}>
                <InputWithLabel
                  name="name"
                  type="text"
                  label="Naziv"
                  component={TextInput}
                />
              </Grid>
              {/* Description */}
              <Grid item lg={5} md={8} sm={12} xs={12}>
                <InputWithLabel
                  name="description"
                  type="textarea"
                  component={TextInput}
                  label="Opis"
                  multiline
                  rows="4"
                />
              </Grid>
              {/* Layout */}
              <Grid item lg={5} md={8} sm={12} xs={12}>
                <Grid
                  container
                  justify="center"
                  alignItems="flex-start"
                  // justify="flex-start"
                >
                  <Grid item lg={2} sm={2} md={2} xs={12}>
                    <Typography className={c.label} variant="caption">
                      Layout:
                    </Typography>
                  </Grid>
                  <Grid item lg={8} sm={8} md={8} xs={12}>
                    <Field
                      options={layouts}
                      className={`${c.w100} ${c.textfiled}`}
                      name="layout"
                      value={state.layout}
                      handleChange={e => handleSelectChange(e)}
                      component={SelectInput}
                    />
                  </Grid>
                  <Grid item lg={2} sm={2} md={2} xs={12}></Grid>
                </Grid>
              </Grid>
              {/* Home & home order */}
              <Grid item lg={5} md={8} sm={12} xs={12}>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item lg={10} md={10} sm={10} xs={12}>
                    {/* Home  */}
                    <Grid
                      container
                      justify="space-between"
                      alignItems="center"
                      className={c.homeOrder}
                    >
                      <Grid item>
                        <Typography className={c.label} variant="caption">
                          Početna stranica:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Field
                          onChange={toggleHome}
                          className={`${c.w100} ${c.textfiled}`}
                          name="home"
                          component={CheckboxInput}
                        />
                      </Grid>
                      {/* Home order */}
                      {homeOrder}
                    </Grid>
                  </Grid>
                  <Grid item lg={2} xs={0}></Grid>
                </Grid>
              </Grid>
              {/* Sidebar & Type */}
              <Grid item lg={5} md={8} sm={12} xs={12}>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item lg={10} md={10} sm={10} xs={12}>
                    {/* Sidebar  */}
                    <Grid
                      container
                      justify="space-between"
                      alignItems="center"
                      className={c.homeOrder}
                    >
                      <Grid item>
                        <Typography className={c.label} variant="caption">
                          Sidebar:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Field
                          className={`${c.w100} ${c.textfiled}`}
                          name="sidebar"
                          component={CheckboxInput}
                          onChange={toggleSidebar}
                        />
                      </Grid>
                      {/* type */}
                      {type}
                    </Grid>
                  </Grid>
                  <Grid item lg={2}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};
export default CreatecategoryPage;
