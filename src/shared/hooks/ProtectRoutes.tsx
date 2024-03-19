"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { getLocalStorage } from "../utils/localStorageUtils";
import { USER_DATA } from "../constants/localStorageVariables";
import { HOME_URL, LOGIN_URL } from "../constants/urlPaths";

const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = getLocalStorage(USER_DATA);
  const pathname = usePathname()

  useEffect(() => {
    handleProtectRoute()
  }, [pathname]);

  const handleProtectRoute = () => {
    if (!user) {
      router.push(LOGIN_URL);
      return
    }

    if (pathname === LOGIN_URL && user) {
      router.push(HOME_URL);
      return
    }
  };

  return children;
};

export default ProtectRoute;
