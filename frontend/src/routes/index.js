import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

const routes = [
    {
      path: '/signup',
      component: Login,
      title: "Signup",
    },
    {
      path: '/login',
      component: SignUp,
      title: "Signin",
    },
];

export default routes;