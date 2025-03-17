import { useState } from "react";
// this tookmore than half day . . .
// import { useAuthContext } from "../context/AuthContext";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(False)
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (userName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/create_account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save the user to lcal storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth json
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
