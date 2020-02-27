import React from "react";
import { withFormik, Form } from "formik";
import { Grid, Button, Typography } from "@material-ui/core";
import axios from "axios";

import { sixDigitStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const onlyNum = e => {
  const x = e.which || e.keycode;
  if (!((x >= 48 && x <= 57) || x == 8 || (x >= 35 && x <= 40) || x == 46)) {
    e.preventDefault();
  }
};

const digitNameAndIdInputs = [
  "digitOne",
  "digitTwo",
  "digitThree",
  "digitFour",
  "digitFive",
  "digitSix"
];

const FormSixDigits = props => {
  const { values, errors, handleChange } = props;
  const c = useStyles(sixDigitStyle);

  const focusFirstInput = () => {
    const firstDigitInput = document.getElementById(digitInputs[0]);
    firstDigitInput.focus();
  };

  const focusNextInput = e => {
    if (
      e.target.value.length &&
      e.target.name !== digitNameAndIdInputs[digitNameAndIdInputs.length - 1]
    ) {
      const currentDigitInputIndex = digitNameAndIdInputs.indexOf(
        e.target.name
      );
      const nextDigitInput = document.getElementById(
        digitNameAndIdInputs[currentDigitInputIndex + 1]
      );
      nextDigitInput.focus();
    }
  };

  let digitInputs = [];
  for (let i = 0; i < 6; i++) {
    digitInputs.push([
      <div key={i} className={c.digitWrapper}>
        <input
          id={digitNameAndIdInputs[i]}
          type="text"
          name={digitNameAndIdInputs[i]}
          value={values.name}
          maxLength="1"
          onChange={handleChange}
          onKeyDown={onlyNum}
          className={c.digitInput}
          onKeyUp={focusNextInput}
        />
      </div>
    ]);
    if (i < 5) {
      digitInputs.push([<span key={i} className={c.spanWrapper}></span>]);
    }
  }

  return (
    <div>
      <Form className={c.form}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <h1 className={c.heading}>zaboravljena lozinka</h1>
          </Grid>
          <Grid className={c.msg} item xs={11} sm={11} md={11} lg={11}>
            <Typography className={c.ErrorMsg}>{errors.errorMsg}</Typography>
            <small>Ukucajte kod koji ste dobili na email adresu</small>
          </Grid>

          <Grid container direction="row" justify="center" alignItems="center">
            {digitInputs}
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Button
              className={c.btn}
              type="submit"
              variant="contained"
              color="secondary"
            >
              potvrdi
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

const SixDigit = withFormik({
  mapPropsToValues({
    digitOne,
    digitTwo,
    digitThree,
    digitFour,
    digitFive,
    digitSix
  }) {
    return {
      digitOne: digitOne || "",
      digitTwo: digitTwo || "",
      digitThree: digitThree || "",
      digitFour: digitFour || "",
      digitFive: digitFive || "",
      digitSix: digitSix || ""
    };
  },
  handleSubmit: async (values, { props, setErrors }) => {
    let allValuesArr = Object.values(values);
    const res = allValuesArr.filter(ele => ele !== "");

    if (res.length < 6) {
      return setErrors({ email: `Please enter all six digit codes` });
    }

    let allNum = Object.values({ ...values });
    let finalNum = allNum.join("");
    let parsedNum = parseInt(finalNum);

    const config = {
      email: `${props.match.params.usersEmail}`,
      resetCode: parsedNum
    };
    // console.log(props)
    try {
      const res = await axios.post("/user/check", config);
      if (res.status !== 200 && res.status !== 201) {
        alert("Pogresno unet kod");
        setTimeout(() => {
          props.history.push(`/forgot-pass`);
        }, 1000);
      } else {
        alert("Uspesno unet kod");
        setTimeout(() => {
          props.history.push(`/reset-pass/${values.email}?`);
        }, 1000);
      }
    } catch (error) {
      console.log("Puklo, u catchu je");
      return setErrors({ errorMsg: error.response.data.error });
    }
  }
})(FormSixDigits);

export { SixDigit };
