import React from "react";
import { Form, withFormik } from "formik";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";

import { useStyles } from "@hooks";
import { resetPassStyle } from "@assets/jss";

const FormResetPass = props => {
  const { values, errors, handleChange } = props;
  const c = useStyles(resetPassStyle);
  return (
    <div className={c.form}>
      <Form>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <h1 className={c.heading}>resetovanje lozinke</h1>
            <Typography className={c.errorMsg}>{errors.email}</Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={10}>
            <TextField
              id="outlined-email-input"
              label="Nova lozinka"
              type="password"
              name="password"
              value={values.name}
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              className={c.w100}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={10}>
            <TextField
              id="outlined-email-input"
              label="Potvrda lozinke"
              type="password"
              name="confirmedPassword"
              value={values.name}
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              className={c.w100}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={c.btn}
            >
              potvrdi
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

const ResetPass = withFormik({
  mapPropsToValues({ password, confirmedPassword }) {
    return {
      password: password || "",
      confirmedPassword: confirmedPassword || ""
    };
  },
  handleSubmit: async (values, { props, setErrors }) => {
    const { password, confirmedPassword } = values;

    if (password !== confirmedPassword) {
      return setErrors({ email: `Lozinke moraju biti identicne` });
    }

    const config = {
      email: `${props.match.params.usersEmail}`,
      password: password
    };

    try {
      const res = await axios.put("/user/newpassword", config);
      if (res.status !== 200 && res.status !== 201) {
        props.history.push(`/forgot-pass/`);
      } else {
        alert("Uspesna izmena lozinke");
        setTimeout(() => {
          props.history.push(`/login`);
        }, 1000);
      }
    } catch (error) {
      console.log("Puklo, u catchu je");
      return setErrors({ errorMsg: error.response.data.error });
    }
  }
})(FormResetPass);

export { ResetPass };
