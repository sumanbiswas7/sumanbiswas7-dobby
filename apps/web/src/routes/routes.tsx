import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

export default [
   { path: "/", element: <HomePage /> },
   { path: "/auth/login", element: <LoginPage /> },
   { path: "/auth/signup", element: <SignupPage /> },
];
