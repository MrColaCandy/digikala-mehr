import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
/**
 * Router component for handling routing in a React application.
 * @param {Array} routes - An array of route configurations.
 * @param {Object} opts - Options for configuring the router.
 */
function Router({ routes, opts = {} }) {

  return <RouterProvider router={createBrowserRouter(routes, opts)} />;
}

export default Router;

