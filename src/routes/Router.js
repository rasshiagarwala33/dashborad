import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const AddUsers = lazy(() => import("../views/ui/AddUsers"));
const AddShifts = lazy(() => import("../views/ui/AddShifts"));
const AttendanceReport = lazy(() => import("../views/ui/AttendanceReport"));
const Shifts = lazy(() => import("../views/ui/Shifts"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Issues = lazy(() => import("../views/ui/Issues"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/add-users", exact: true, element: <AddUsers/> },
      { path: "/add-shifts", exact: true, element: <AddShifts/> },
      { path: "/attendance-report", exact: true, element: <AttendanceReport/> },
      { path: "/shifts", exact: true, element: <Shifts/> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/issues", exact: true, element: <Issues /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
    ],
  },
];

export default ThemeRoutes;
