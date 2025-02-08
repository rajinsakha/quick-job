/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase, setAuthToken } from "@/constants/axiosInstance";
import { setIsLoggedIn } from "@/lib/redux/features/authReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useState, useCallback, useEffect } from "react";

const useCheckToken = () => {
  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { token } = useAppSelector((state) => state.authReducer);

  const checkToken = useCallback(async () => {
    try {
      setAuthToken(token);

      // First API call - Verify token
      const response = await apiBase.get("/auth/check-token/", {
        headers: {
          Authorization: `TOKEN ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(setIsLoggedIn(true));
        setIsAuthenticated(true); // Token is valid
      }
    } catch (error: any) {
      // Handle the first API call error
      console.log("Token verification error:", error);
      dispatch(setIsLoggedIn(false));
      setIsAuthenticated(false); // Other errors
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  }, [token, dispatch]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return { isAuthenticated, loading };
};

export default useCheckToken;
