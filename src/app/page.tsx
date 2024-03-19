"use client";
import Navbar from "@/components/Navbar";
import SpinnerLoading from "@/components/SpinnerLoading";
import HomeModules from "@/modules/HomeModule";
import { USER_DATA } from "@/shared/constants/localStorageVariables";
import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLaoding, setIsLaoding] = useState(true);
  const user = getLocalStorage(USER_DATA);

  useEffect(() => {
    handleIntial();
  }, []);

  const handleIntial = () => {
    if (user) {
      setIsLaoding(false);
    }
  };

  if (isLaoding)
    return (
      <div className="max-w-screen-xl h-[100vh] flex flex-col justify-center items-center">
        <SpinnerLoading />
      </div>
    );

  return (
    <main className="bg-background dark:bg-background pt-24">
      <Navbar />
      <HomeModules />
    </main>
  );
}
