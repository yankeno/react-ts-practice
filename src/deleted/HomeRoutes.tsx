import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagemant } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/user_management",
    children: <UserManagemant />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
];
