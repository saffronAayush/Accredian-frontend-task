import axios from "axios";
import React, { lazy, Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useAppStore } from "../store/index.js";
import { server } from "./utils/constants.js";

// Routes imports **********************************************************************************
const Home = lazy(() => import("./pages/Home.jsx"));

// Route *****************************************************************************************
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },

  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);

const App = () => {
  const { setUserInfo, user } = useAppStore();
  const token = localStorage.getItem("token");

  // functions *******************************************************************************************
  const getChannelInfo = async () => {
    try {
      const { data } = await axios.get(`${server}/user/info?token=${token}`, {
        withCredentials: true,
      });
      setUserInfo(data.user);
    } catch (err) {
      setUserInfo(false);
      console.log("not logged in", err);
    }
  };

  // userEffect *******************************************************************************************
  useEffect(() => {
    getChannelInfo(user);
    console.log(user);
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
