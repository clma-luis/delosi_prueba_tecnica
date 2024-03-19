"use client";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorageUtils";
import { USER_DATA } from "../constants/localStorageVariables";
import SpinnerLoading from "@/components/SpinnerLoading";
import { usePathname } from "next/navigation";
import { LOGIN_URL } from "../constants/urlPaths";

const ValidateUser = ({ children }: { children: React.ReactNode }) => {
  const [isLaoding, setIsLaoding] = useState(true);
  const user = getLocalStorage(USER_DATA);
  const pathname = usePathname();

  useEffect(() => {
    handleIntial();
  }, []);

  const handleIntial = () => {
    if (user) {
      setIsLaoding(false);
    } else if (pathname === LOGIN_URL && !user) {
      setIsLaoding(false);
    }
  };

  if (isLaoding)
    return (
      <div className="max-w-screen-xl h-[100vh] flex flex-col justify-center items-center">
        <SpinnerLoading />
      </div>
    );

  return <>{children}</>;
};

export default ValidateUser;
