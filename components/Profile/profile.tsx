"use client";
import React, { useState, useEffect } from "react";
import { CheckAuthentication } from "../utils/checkAuthentication";
import Avatar from "../../public/images/woman.png"
import Image from "next/image";

const Profile = () => {
  CheckAuthentication();
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedName = localStorage.getItem("name") ?? "";
        const storedEmail = localStorage.getItem("email") ?? "";

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setUserInfo({
          name: storedName,
          email: storedEmail,
        });
        setLoadingProfile(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

return (
  <>
    {loadingProfile ? (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ) : (
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src={Avatar}
              alt="Profile Picture"
              className="rounded-full w-32 h-32 mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{userInfo.name}</h2>
            <p className="text-gray-600 mb-4">{userInfo.email}</p>
            <div className="flex gap-4">
              <a
                href="/stories/indeStories"
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300"
              >
                My Stories
              </a>
              <a
                href="/logout"
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);




};

export default Profile;
