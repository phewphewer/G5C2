import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/HomePage.jsx";
import Dashboard from "./pages/ProfilePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./components/features/auth/LoginForm.jsx";
import SignUp from "./components/features/auth/SignupForm.jsx";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";

// const userName = Object.entries.map((key, value) => {

// })
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
    errorElement: <PageNotFound />,
  },
  {
    // path: `/Dashboard/${userName}`,
    path: "/Dashboard",
    element: <Dashboard />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
