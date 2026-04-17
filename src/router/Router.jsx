import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import ErrorPage from "../Pages/Errorpage";
import FriendDetails from "../Pages/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friendDetails/:friendId",
        element: <FriendDetails />,
        loader: () => fetch("/data.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
