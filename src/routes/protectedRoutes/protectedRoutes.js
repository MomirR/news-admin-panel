import UserListPage from "@pages/UserListPage";
import CreateCategoryPage from "@pages/category/CreateCategoryPage";
import SingleUser from "@pages/SingleUser";
import EditUserProfilePage from '@pages/EditUserProfilePage';
import Home from "@pages/HomePage";

export const protectedRoutes = [
  {
    path: "/edit-profile/:id",
    component: EditUserProfilePage
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: UserListPage
  },
  {
    path: "/singleuser/:id",
    component: SingleUser
  },
  {
    path: "/category/createcategory",
    component: CreateCategoryPage
  }
];
