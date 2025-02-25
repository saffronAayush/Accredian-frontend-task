import React, { lazy, Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import { useAppStore } from "../store/index.js";

// Routes imports ****************************************
const Home = lazy(() => import("./pages/Home.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));

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
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },

  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);

const server = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

const App = () => {
  const { setUserInfo, user } = useAppStore();
  const getChannelInfo = async () => {
    try {
      const { data } = await axios.get(`${server}/user/info`, {
        withCredentials: true,
      });
      console.log("in app data", data.user);
      setUserInfo(data.user);
    } catch (err) {
      setUserInfo(undefined);
      console.log("not logged in", err);
    }
  };
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
