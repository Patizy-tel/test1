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
    path: "/admin",
    title: "Dashboard",
    icon: "mdi mdi-gauge",
    class: "",
    extralink: false,
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
  {
    path: "/admin/clients",
    title: "Clients",
    icon: "mdi mdi-account-switch",
    class: "",
    extralink: false,
    submenu: [],
  },

  {
    path: "/admin/loans",
    title: "Loans",
    icon: "mdi mdi-cash-usd",
    class: "",
    extralink: false,
    submenu: [],
  },

  {
    path: "/admin/loanTypes",
    title: "Loan Types",
    icon: "mdi mdi-book-plus",
    class: "",
    extralink: false,
    submenu: [],
  },



  {
    path: "/admin/loanmanagement",
    title: "Loan Management",
    icon: "mdi mdi-credit-card-scan",
    class: "",
    extralink: false,
    submenu: [],
  },






];
