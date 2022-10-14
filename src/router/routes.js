import links from "./links";
import Page404 from "@/components/Page404";
import Login from "@/components/Login";
import Dashborad from "@/components/Dashborad";

export default [
  { path: links.home, name: "login", component: Login },
  { path: links.dashboard, name: "dashboard", component: Dashborad },
  { path: "*", name: "Not Found", component: Page404 },
];
