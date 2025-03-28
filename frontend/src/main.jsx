import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/homePage/HomePage.jsx";
import Dashboard from "./pages/profilePage/ProfilePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/LoginForm.jsx";
import SignUp from "./pages/SignupForm.jsx";
import Feedback from "./pages/Feedback.jsx";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

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
  {
    path: "/feedback",
    element: <Feedback />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
