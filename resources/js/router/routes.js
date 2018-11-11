import {store} from "../store/store";

import DashboardLayout from "../layout/dashboard/DashboardLayout.vue";
import NotFound from "../pages/NotFoundPage.vue";

import Dashboard from "../pages/Dashboard.vue";
import UserProfile from "../pages/UserProfile.vue";
import Notifications from "../pages/Notifications.vue";
import Icons from "../pages/Icons.vue";
import Maps from "../pages/Maps.vue";
import Typography from "../pages/Typography.vue";
import TableList from "../pages/TableList.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Users from "../pages/Users.vue";
import Items from "../pages/Items.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
    {
            path: "login",
            name: "login",
            component: Login,
              beforeEnter: (to, from, next) => {
                  if (store.getters.loggedIn) {
                      next('/dashboard');
                  } else {
                      next();
                  }
              },
    },
    {
        path: "register",
        name: "register",
        component: Register,
        beforeEnter: (to, from, next) => {
            if (store.getters.loggedIn) {
                next('/dashboard');
            } else {
                next();
            }
        },
    },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (!store.getters.loggedIn) {
                next('/login');
            } else {
                next();
            }
        },
      },
      {
        path: "users",
        name: "users",
        component: Users,
          // beforeEnter: ifAuthenticated,
      },
      {
        path: "items",
        name: "items",
        component: Items,
      beforeEnter: (to, from, next) => {
          if (!store.getters.loggedIn) {
              next('/login');
          } else {
              next();
          }
      },
      },
      // {
      //   path: "icons",
      //   name: "icons",
      //   component: Icons,
      //     // beforeEnter: ifAuthenticated,
      // },
      // {
      //   path: "maps",
      //   name: "maps",
      //   component: Maps,
      //     // beforeEnter: ifAuthenticated,
      // },
      // {
      //   path: "typography",
      //   name: "typography",
      //   component: Typography,
      //     // beforeEnter: ifAuthenticated,
      // },
      // {
      //   path: "table-list",
      //   name: "table-list",
      //   component: TableList,
      //     // beforeEnter: ifAuthenticated,
      // }
    ]
  },
  { path: "*", component: NotFound }
];

export default routes;
