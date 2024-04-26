"use client"
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { AxiosRequests } from "./axiosRequests";
import { CustomRouter } from "../interface";
import { useAppDispatch } from "@/lib/hooks"
import { logout } from "@/lib/features/auth/authSlice"

export const HandleLogout = async (router: CustomRouter) => {
  const dispatch = useAppDispatch();
  const reqInstance = AxiosRequests(router);
  const refresh_token = Cookies.get("refresh_token")
  const formData = { "refresh_token": refresh_token }
  const url = "/accounts/logout"
  try {
    const res = await reqInstance.post(url, formData);
    if (res.status === 200) {
      localStorage.clear();
      Cookies.remove('refresh_token')
      toast.success("Logout successful");
      dispatch(logout());
      router.push("/");
      return;
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        router.push("/signin");
        toast.error("Session expired");
      }
      return;
    } else {
      console.error("Logout error:", error.response);
      toast.error("An error occurred during logout");
    }
  }
};
