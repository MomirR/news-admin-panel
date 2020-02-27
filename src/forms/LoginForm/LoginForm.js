import React, { useState } from "react";

import { Button, Grid, Typography, Link } from "@material-ui/core/";
import { TextInput, CheckboxInput } from "@forms/inputs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginFormStyle } from "@assets/jss";
import { useStyles, axios } from "@hooks";
import { useHistory } from "react-router";
import { loginValidationSchema } from "@forms/validation";

const LoginForm = props => {
  const initialValues = {
    email: "",
    password: "",
    remember: false
  };

  const [state, setState] = useState({ error: null });
  const history = useHistory();

  const handleSubmit = async ({ email, password, remember }) => {
    try {
      const res = await axios.post("/user/login", {
        email,
        password,
        remember
      });
      localStorage.setItem("token", res.headers["authorization"]);
      history.push("/");
    } catch (error) {
      let errorTranslate = "Došlo je do greške!";

      if (error.response === undefined) {
        return setState({ error: errorTranslate });
      }

      if (error.response.data) {
        switch (error.response.data.error) {
          case "Not confirmed email":
            errorTranslate = "Nije potvrđen e-mail";
            history.push({ pathname: "/six-digit", params: { email } });
            break;
          case "User not found!":
            errorTranslate = "Korisnik ne postoji!";
            break;
          case "Incorrect password":
            errorTranslate = "Pogrešna lozinka";
            break;
          default:
            break;
        }
      }
      setState({ error: errorTranslate });
    }
  };
  const c = useStyles(loginFormStyle);

  return (
    <Grid
      item
      container
      className={c.loginForm}
      justify="center"
      direction="column"
      alignItems="center"
      xs={12}
      s={4}
      md={5}
      lg={5}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {values => (
          <Form className={c.w100}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={c.w100}>
                <Typography
                  variant="h4"
                  align="center"
                  className={c.signInText}
                >
                  PRIJAVLJIVANJE
                </Typography>
                <Typography className={c.errorMsg}>{state.error}</Typography>
              </Grid>
              <Grid item className={c.w100}>
                <Field
                  className={c.w100}
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  component={TextInput}
                />

                {values.errors.email && (
                  <Typography className={c.errorMsg}>
                    <ErrorMessage name="email" />
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} className={c.w100}>
                <Field
                  className={c.w100}
                  name="password"
                  type="password"
                  placeholder="Password"
                  component={TextInput}
                />
                {values.errors.password && (
                  <Typography className={c.errorMsg}>
                    <ErrorMessage name="password" />
                  </Typography>
                )}
              </Grid>

              <Grid
                item
                xs={12}
                container
                alignItems="center"
                diretion="row"
                justify="center"
              >
                <Field
                  name="remember"
                  type="checkbox"
                  color="primary"
                  component={CheckboxInput}
                />
                <Typography color="primary">Zapamti me</Typography>
              </Grid>
              <Grid item xs={12} className={c.w100}>
                <Button
                  className={c.w100}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Prijava
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link className={c.link}>Zaboravljena šifra</Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
export { LoginForm };
