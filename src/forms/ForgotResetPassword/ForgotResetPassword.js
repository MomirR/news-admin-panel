import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import axios from "axios";

import { forgotPassStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const FormForgotResetPass = props => {
  const { values, errors, handleChange } = props;
  const c = useStyles(forgotPassStyle);
  return (
    <Form className={c.form}>
      <Grid
        container
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <h1 className={c.heading}>zaboravljena lozinka</h1>
          {<Typography className={c.ErrorMsg}>{errors.errorMsg}</Typography>}
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          {<Typography className={c.ErrorMsg}>{errors.email}</Typography>}
          <TextField
            id="outlined-email-input"
            label="Email adresa"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            className={c.w100}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <Button type="submit" variant="contained" className={c.btn}>
            pošalji
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

const ForgotResetPassword = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(3, "Minimum 3 characters needed")
      .email("Email not valid")
      .required("Email is required")
  }),
  handleSubmit: async (values, { setErrors, props }) => {
    let config = {
      email: `${values.email}`
    };

    try {
      const res = await axios.post("/user/reset", config);
      if (res.status !== 200 && res.status !== 201) {
        return setErrors({ email: `Please enter valid email` });
      } else {
        alert("Uspesno poslato");
        setTimeout(() => {
          props.history.push(`/six-digit/${values.email}`);
        }, 1000);
      }
    } catch (error) {
      return setErrors({ errorMsg: error.response.data.error });
    }
  }
})(FormForgotResetPass);

export { ForgotResetPassword };
