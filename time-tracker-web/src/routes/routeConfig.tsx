import LoginPage from "../views/LoginPage";
import TimeEntryForm from "../views/TimeEntryForm";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
    private: false,
  },
  {
    path: "/home",
    element: <TimeEntryForm />,
    private: true,
  },
];
