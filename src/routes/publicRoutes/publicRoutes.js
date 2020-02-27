import { ForgotResetPassword, SixDigit, ResetPass } from "@forms";
import LoginPage from "@pages/LoginPage";

export const publicRoutes = [
  {
    path: "/six-digit/:usersEmail",
    component: SixDigit
  },
  {
    path: "/reset-pass/:usersEmail",
    component: ResetPass
  },
  {
    path: "/forgot-pass",
    component: ForgotResetPassword
  },
  {
    path: "/login",
    component: LoginPage
  }
];
