"use client";

import React, { FormEvent, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import logoImage from "../../assets/logo.jpg";
import "../../styles/login-register.css";
import Image from "next/image";
import { signupResponseData } from "../interface";
import { BaseUrl } from "../utils/baseUrl";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { username, email, first_name, last_name, password, password2 } = formData;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !first_name || !last_name || !password || !password2) {
      setError("All fields are required");
      return;
    }
    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    try {
      setIsLoading(true);
      const url = `${BaseUrl}/api/accounts/register`;
      const req: AxiosResponse<any> = await axios.post(
        url,
        formData
      );
      if (req.status === 201) {
        setIsLoading(false);
        toast.success("Registration successful");
        toast.success("A verification code has been sent to your email");
        router.push("/signin");
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const responseData = axiosError.response.data as signupResponseData;
          console.log("the  response data is ", responseData)
          if (responseData && responseData.email) {
            setError(responseData.email[0]);
          } else if (responseData && responseData.password) {
            setError("Password must have at least 6 ");
          }
        } else {
          console.log("Error:", axiosError.message);
          setError("Network error. Please try again later.");
        }
      } else {
        console.log("Unknown error: ", error);
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="login-container">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-900">
          </div>
        </div>
      ) :

        (
          <div className="login-card">
            <div className="picture-section"></div>
            <div className="login-content">
              <div className="logo-card-header">
                <Image src={logoImage} alt="Logo" className="logo-card" />
                <span className="login-card-text">Sign up</span>
              </div>
              <div className="flex justify-center mt-2 mb-2">
                <span className="text-red-500">{error}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="p-1 text-red-900"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="p-1 text-red-900"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="p-1 text-red-900"
                    value={first_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="p-1 text-red-900"
                    value={last_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="p-1 text-red-900"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    className="p-1 text-red-900"
                    value={password2}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center mt-2">
                  <input type="submit" value="Sign Up" className="submit-btn" />
                </div>
              </form>
              <div>
                <p>
                  Dont have an account? <a href="/signin">Sign In</a>
                </p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );


};

export default SignUp;
