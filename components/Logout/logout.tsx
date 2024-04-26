'use client'
import { HandleLogout } from "../utils/AuthLogout"
import { useRouter } from "next/navigation"

export const Logout = () => {
  const router = useRouter();
  HandleLogout(router);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-900">
        </div>
      </div>
    </>
  )
}