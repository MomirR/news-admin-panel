import React from 'react'
import { Grid } from "@material-ui/core";

import { FormikBasicInfoForm, FormikSocialNetwork, FormikPassForm } from "@forms"
import { formWrapperStyle } from '@assets/jss'
import { useStyles } from "@hooks";

export const FormWrapper = (props) => {
    const c = useStyles(formWrapperStyle);

    return (
        <Grid container alignItems="baseline">
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormikBasicInfoForm userData={props.userData} />
                <FormikSocialNetwork userData={props.userData} />
                <FormikPassForm userData={props.userData} />
            </Grid>
        </Grid>
    )
}
