import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Main",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "/admin/branches",
    title: "Branches",
    icon: "mdi mdi-source-fork",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/admin/users",
    title: "Sys Users",
    icon: "mdi mdi-account-box-outline",
    class: "",
    extralink: false,
    submenu: [],
  },





];
