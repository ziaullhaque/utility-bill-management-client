import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBills from "../pages/MyBills/MyBills";
import PrivateRoute from "../Private/PrivateRoute";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/BillDetails/BillDetails";
import AddBill from "../pages/AddBill/AddBill";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Help from "../pages/Help/Help";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCharts from "../pages/Dashboard/DashboardCharts/DashboardCharts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <Error></Error>,
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
      {
        path: "/bills",
        Component: Bills,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/help",
        Component: Help,
      },
      {
        path: "/my-bills",
        element: (
          <PrivateRoute>
            <MyBills></MyBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-bill",
        element: (
          <PrivateRoute>
            <AddBill></AddBill>
          </PrivateRoute>
        ),
      },

      {
        path: "/bill-details/:id",
        element: (
          <PrivateRoute>
            <BillDetails></BillDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardCharts></DashboardCharts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardCharts></DashboardCharts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
