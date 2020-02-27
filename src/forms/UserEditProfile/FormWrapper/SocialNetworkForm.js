import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Form, withFormik, Field } from "formik";
import { withTokenAxios } from "@hooks";

import { basicInfoFormStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const SocialNetwork = props => {
  const { values, handleChange, userData } = props;
  const d = userData;
  const c = useStyles(basicInfoFormStyle);

  const allBasicDataSocial = {
    label: ["Facebook:", "Instagram:", "Twitter:", "Linkedin:"],
    idAndName: ["facebook", "instagram", "twitter", "linkedin"]
  };
  const socialInputs = allBasicDataSocial.label.map((ele, i) => {
    return (
      <label
        htmlFor={`${allBasicDataSocial.idAndName[i]}`}
        className={c.label}
        key={i}
      >
        <Typography variant="caption" className={c.textLabelSocial}>
          {allBasicDataSocial.label[i]}
        </Typography>
        <Field
          className={c.customInput}
          id={`${allBasicDataSocial.idAndName[i]}`}
          type="text"
          name={`${allBasicDataSocial.idAndName[i]}`}
          value={values[allBasicDataSocial.idAndName[i]]}
          onChange={handleChange}
        />
      </label>
    );
  });

  return (
    <div>
      <Typography variant="h2">Društvene mreže</Typography>
      <Form>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {socialInputs}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <button type="submit" className={`${c.btn} ${c.btnSocial}`}>
              Sačuvaj
            </button>
          </Grid>
        </Grid>
      </Form>
      <div className={c.line}></div>
    </div>
  );
};

const FormikSocialNetwork = withFormik({
  mapPropsToValues({ userData }) {
    return {
      facebook: userData.socialAccounts[0].link,
      instagram: userData.socialAccounts[1].link,
      twitter: userData.socialAccounts[2].link,
      linkedin: userData.socialAccounts[3].link
    };
  },
  handleSubmit: async values => {
    try {
      const res = await withTokenAxios.put("user/editUser", values);
      alert(`${res.data.message}`);
    } catch (error) {
      console.log("Puklo, u catchu je");
    }
  }
})(SocialNetwork);

export { FormikSocialNetwork };
