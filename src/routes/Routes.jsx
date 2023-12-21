import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Mainlayout from "../layout/mainlayout/Mainlayout";
import CpanelHome from "../pages/dashboard/CpanelHome";
import ManageStudent from "../pages/dashboard/manageStudent/ManageStudent";
import Home from "../pages/home/Home";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/admin-cpanel",
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin-cpanel",
        element: (
          <AdminRoute>
            <CpanelHome></CpanelHome>
          </AdminRoute>
        ),
      },
      {
        path: "manage-student",
        element: (
          <AdminRoute>
            <ManageStudent></ManageStudent>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
