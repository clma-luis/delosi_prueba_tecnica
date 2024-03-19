import React from "react";
import { NavbarMenu } from "../NavbarMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0  border-gray-200  bg-background dark:bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
