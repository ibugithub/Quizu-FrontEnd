"use client";
import React, { useEffect, useState } from "react";
import "../../styles/navbar.css";
import logoImage from "../../assets/logo.jpg";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/auth/authSlice";
import Link from "next/link";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const [isLoading, setIsLoading] = useState(false)
  const [navClick, setNavClick] = useState(false)

  const handleNavToggle = () => {
    setNavClick(!navClick)
  }

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch(login())
    }
  }, [dispatch]);


  if (isLoading) {
    return <div className=" bg-white absolute top-0 left-0 right-0 h-[72px] flex justify-center"><span className="mt-[1.4rem]">Loading...</span></div>
  }
  return (
    <nav className="navbar">
      <div className="navbar-items justify-between">
        <div className="left-nav-items flex">
          <Image src={logoImage} alt="Logo" className="logo-image" />
          <Link href="/" className="logo-text">
            Quizu
          </Link>
        </div>
        <div className=" mr-2 hidden sm:flex">
          <Link
            href="/quiz"
            className="navbar-item"
          >
            Quiz
          </Link>

          <Link
            href="/notes"
            className="navbar-item"
          >
            Notes
          </Link>

          <Link
            href="/about"
            className="navbar-item"
          >
            About
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className="navbar-item"
                aria-haspopup="true"
              >
                Profile
              </Link>
            </>
          ) : (
            <Link
              href="/signin"
              className="navbar-item"
              aria-haspopup="true"
            >
              Sign in
            </Link>
          )}
        </div>
        {/* nav in mobile */}
        <div
          className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white  sm:hidden absolute right-2 top-[1rem]"
        >
          <span className="sr-only">t</span>

          {navClick ? (
            <div className="flex p-2 justify-between bg-white text-gray-800">
              <div className="flex relative gap-2  flex-col z-50">
                <Link
                  href="/stories"
                  className="navbar-item"
                >
                  Quiz
                </Link>

                <Link
                  href="/notes"
                  className="navbar-item"
                >
                  Notes
                </Link>

                <Link
                  href="/about"
                  className="navbar-item"
                >
                  About
                </Link>

                {isAuthenticated ? (
                  <>
                    <Link
                      href="/profile"
                      className="navbar-item"
                      aria-haspopup="true"
                    >
                      Profile
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/signin"
                    className="navbar-item"
                    aria-haspopup="true"
                  >
                    Sign in
                  </Link>
                )}
              </div>
              <svg
                onClick={handleNavToggle}
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

          ) : (
            <svg
              onClick={handleNavToggle}
              className="block h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}


        </div>
      </div>
    </nav>
  );

};
