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
]);
