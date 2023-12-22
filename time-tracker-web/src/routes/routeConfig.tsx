import LoginPage from "../views/LoginPage";
import HomePage from "../views/HomePage";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
    private: false,
  },
  {
    path: "/home",
    element: <HomePage />,
    private: true,
  },
];
