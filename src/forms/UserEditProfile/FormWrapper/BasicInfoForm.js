import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Form, withFormik } from "formik";
import { withTokenAxios } from "@hooks";
import { TextInput, SelectInput } from "@inputs";

import { basicInfoFormStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const BasicInfoForm = ({ values, handleChange, userData }) => {
  const c = useStyles(basicInfoFormStyle);

  const formData = [
    {
      label: "Ime",
      name: "name"
    },
    {
      label: "Prezime",
      name: "subname"
    },
    {
      label: "Email",
      name: "email"
    },
    {
      label: "Telefon",
      name: "phone"
    },
    {
      label: "Godine",
      name: "year"
    },
    {
      label: "Država",
      name: "country"
    },
    {
      label: "Grad",
      name: "city"
    },
    {
      label: "Adresa",
      name: "address"
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      options: [
        {
          label: "Aktivan",
          value: "active"
        },
        {
          label: "Blokiran",
          value: "blocked"
        },
        {
          label: "Disabled",
          value: "disabled"
        },
        {
          label: "Obrisan",
          value: "deleted"
        }
      ]
    },
    {
      label: "Rola",
      name: "role",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Manager",
          value: "manager"
        },
        {
          label: "Novinar",
          value: "journalist"
        },
        {
          label: "Visitor",
          value: "visitor"
        }
      ]
    },
    {
      label: "Pozicija",
      name: "position"
    }
  ];

  return (
    <>
      <Typography variant="h2">Osnovne informacije</Typography>
      <Form>
        <Grid container className={c.center}>
          {/* LEFT GRID */}
          <Grid item xs={12} sm={12} md={5} lg={5}>
            {formData.slice(0, 7).map((input, index) => {
              return (
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  key={index}
                >
                  <Grid item md={4}>
                    <Typography variant="caption" className={c.textLabel}>
                      {input.label}
                    </Typography>
                  </Grid>
                  <Grid item md={8}>
                    <TextInput
                      id={input.name}
                      type="text"
                      name={input.name}
                      value={values[input.name]}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      style={{ marginBottom: 15 }}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>

          {/* VERTICAL LINE */}
          <Grid item md={1} lg={1}>
            <div className={c.verticalLine}></div>
          </Grid>

          {/* RIGHT GRID */}
          <Grid item xs={12} sm={12} md={6} lg={5}>
            {formData.slice(7, formData.length).map((input, index) => {
              if (input.type === "select") {
                return (
                  <SelectInput
                    key={index}
                    onChange={handleChange}
                    value={values[input.name]}
                    name={input.name}
                    id={input.name}
                    options={input.options}
                    label={input.label}
                  />
                );
              }

              return (
                <TextInput
                  key={index}
                  onChange={handleChange}
                  value={values[input.name]}
                  name={input.name}
                  id={input.name}
                  label={input.label}
                  fullWidth
                  variant="outlined"
                  style={{ marginBottom: 15 }}
                  type="text"
                />
              );
            })}
            {/* <label
              htmlFor={`${allBasicData.idAndName[8]}`}
              className={c.label}
              key={0}
            >
              <Typography variant="caption" className={c.textLabel}>
                {allBasicData.label[8]}
              </Typography>

              <Field component="select" name="status" className={c.select}>
                <option value="active">Aktivan</option>
                <option value="inactive">Neaktivan</option>
              </Field>
            </label>

            <label
              htmlFor={`${allBasicData.idAndName[9]}`}
              className={c.label}
              key={1}
            >
              <Typography variant="caption" className={c.textLabel}>
                {allBasicData.label[9]}
              </Typography>

              <Field component="select" name="rola" className={c.select}>
                <option value="manager">Manager</option>
                <option value="ceo">Direktor</option>
              </Field>
            </label>

            <label
              htmlFor={`${allBasicData.idAndName[10]}`}
              className={c.label}
              key={2}
            >
              <Typography variant="caption" className={c.textLabel}>
                {allBasicData.label[10]}
              </Typography>
              <Field
                className={c.customInput}
                id={`${allBasicData.idAndName[10]}`}
                type="text"
                name={`${allBasicData.idAndName[10]}`}
                value={values[allBasicData.idAndName[10]]}
                onChange={handleChange}
              />
            </label> */}
            <button type="submit" className={`${c.btn} ${c.btnBasicInfo}`}>
              Sačuvaj
            </button>
          </Grid>
        </Grid>
      </Form>
      <div className={c.line}></div>
    </>
  );
};

const FormikBasicInfoForm = withFormik({
  mapPropsToValues({ userData }) {
    return {
      name: userData.firstName,
      subname: userData.lastName,
      email: userData.email,
      phone: "",
      year: "",
      country: userData.country,
      city: userData.city,
      adress: userData.address,
      status: userData.accountStatus,
      role: userData.role,
      position: userData.position
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
})(BasicInfoForm);

export { FormikBasicInfoForm };
