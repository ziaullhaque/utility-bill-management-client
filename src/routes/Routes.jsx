import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBills from "../pages/MyBills/MyBills";
import PrivateRoute from "../Private/PrivateRoute";
import RecentBills from "../pages/RecentBills/RecentBills";
import Bills from "../pages/Bills/Bills";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      // {
      //   path: "/recent-bills",
      //   Component: RecentBills,
      // },
      {
        path: "/bills",
        Component: Bills,
      },
      {
        path: "/my-bills",
        element: (
          <PrivateRoute>
            <MyBills></MyBills>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
