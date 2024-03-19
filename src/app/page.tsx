"use client";
import Navbar from "@/components/Navbar";
import HomeModules from "@/modules/HomeModule";
import ValidateUser from "@/shared/hooks/useValidateUser";

export default function Home() {
  return (
    <ValidateUser>
      <main className="bg-background dark:bg-background pt-24">
        <Navbar />
        <HomeModules />
      </main>
    </ValidateUser>
  );
}
