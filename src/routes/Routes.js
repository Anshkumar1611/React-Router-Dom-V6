import Home from "../components/Home";
import {Login,ErrorPage,Blog,Settings} from "../components/index"

const Routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Home Content</div>,
      },
      {
        path: "/login",
        element: <Login />,
        RouteName: "Login",
        protected: false,
      },
      {
        path: "/blogs",
        element: <Blog />,
        RouteName: "Blogs",
        protected: true,
      },
      {
        path: "/settings",
        element: <Settings />,
        RouteName: "Settings",
        protected: true,
      },
      {
        path: "/logout",
        element: <div>Logout</div>,
        RouteName: "Logout",
        protected: true,
      },
    ],
  },
];

export default Routes;
