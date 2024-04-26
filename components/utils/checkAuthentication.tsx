import { useEffect, useState } from "react"
import { AxiosRequests } from "./axiosRequests";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export const CheckAuthentication = (showMsg: boolean = true) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const router = useRouter();
  const requestIntance = AxiosRequests(router);
  const url = `/accounts/checkAuth`;

  useEffect(() => {
    const check = async () => {
      try {
        const res = await requestIntance.get(url)
        if (res.status === 200) {
          setisAuthenticated(true)
        }
      } catch (err: any) {
        console.error("CheckAuthentication error: ", err)
        if (err.response.status !== 200) {
          if (showMsg) {
            toast.info("Session Expired")
            router.push('/signin')
          }
          return;
        } else {
          console.error("unKnown Error at checkAuthentication", err)
        }
      }
    }
    check();
  }, [requestIntance, router, showMsg, url]);
  return isAuthenticated;
}

export const authenticated = CheckAuthentication;