import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Layout from '../pages/layout/layout';
  import Home from "../pages/Home";
  import Answer from "../pages/Answer";
  import data from '../../data/db.json'
  import Search from "../pages/Search";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home data={ data } />
        },
        {
          path: "/answer/:id",
          element: <Answer data={ data } />
        },
        {
          path: "/:search",
          element: <Search data={ data } />
        }
      ]
    },
  ]);

  export default router;