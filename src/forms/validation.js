import { string, object } from "yup";

const errorMessages = {
  email: {
    valid: "E-mail is not valid!",
    required: "E-mail je obavezno polje!"
  },
  password: {
    required: "Password je obavezno polje!"
  },
  confirmPassword: {
    match: "Šifre moraju da se poklapaju!",
    required: "Potvrda šifre je obavezno polje!"
  }
};
const loginValidationSchema = object({
  email: string()
    .email(errorMessages.email.valid)
    .required(errorMessages.email.required),
  password: string()
    // .min(6)
    .required(errorMessages.password.required)
});
export { loginValidationSchema };
