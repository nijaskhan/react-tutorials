import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import UserDetails, { userLoader } from "./components/UserDetails";
import Counter from "./components/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
    loader: userLoader
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;