import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { Form, withFormik, Field } from "formik";
import { withTokenAxios } from '@hooks'

import { basicInfoFormStyle } from '@assets/jss'
import { useStyles } from "@hooks";

const PassForm = props => {
    const { values, handleChange, userData } = props;
    const d = userData;
    const c = useStyles(basicInfoFormStyle);

    const allBasicDataSocial = {
        label: [
            "Lozinka:", "Potvrda:"
        ],
        idAndName: [
            "lozinka", "potvrda"]
    }

    const passInputs = allBasicDataSocial.label.map((ele, i) => {
        return (
            <label htmlFor={`${allBasicDataSocial.idAndName[i]}`} className={c.label} key={i}>
                <Typography variant="caption" className={c.textLabelSocial}>
                    {allBasicDataSocial.label[i]}
                </Typography>
                <Field
                    className={c.customInput}
                    id={`${allBasicDataSocial.idAndName[i]}`}
                    type="password"
                    name={`${allBasicDataSocial.idAndName[i]}`}
                    value={values[allBasicDataSocial.idAndName[i]]}
                    onChange={handleChange}
                />
            </label>
        )
    })

    return (
        <div className={c.mb50}>
            <Typography variant="h2">Lozinka</Typography>
            <Form>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        {passInputs}
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <button type="submit" className={`${c.btn} ${c.btnPass}`}>Sačuvaj</button>
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}

const FormikPassForm = withFormik({
    mapPropsToValues({
        userData
    }) {
        return {
            lozinka: userData.password,
            potvrda: userData.password
        }
    },
    handleSubmit: async (values) => {
        try {
            if (values.lozinka !== values.potvrda) {
                alert('Password must match')
                return
            }

            const res = await withTokenAxios.put("user/editUser", values);
            alert(`${res.data.message}`)
        } catch (error) {
            console.log("Puklo, u catchu je")
        }
    }
})(PassForm)

export { FormikPassForm };



