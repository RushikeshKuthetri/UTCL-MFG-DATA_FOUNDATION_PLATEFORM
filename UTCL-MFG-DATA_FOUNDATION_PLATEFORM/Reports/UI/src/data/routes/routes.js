//import * as MimicPage from "../../pages";
import * as MimicPage from "../../pages";

export const routes = [
  // Dashboard Route
  // {
  //   path: "/dashboard",
  //   component: MimicPage.Home,
  //   description: "This is the home page for mimics",
  // },

  // Reports Routes
  {
    path: "/reportlist",
    component: MimicPage.ReportList,
    description: "This is the report listing page",
  },
  {
    path: "/reportspage",
    component: MimicPage.ReportsPage,
    description: "This page is for creating report",
  },
  {
    path: "/editreportspage",
    component: MimicPage.ReportsPage,
    description: "This page is for editing reports",
  },
  {
    path: "/reports",
    component: MimicPage.Reports,
    description: "This is for showing specific report",
  }
]


