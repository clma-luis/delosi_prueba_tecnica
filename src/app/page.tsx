import Navbar from "@/components/Navbar";
import HomeModules from "@/modules/HomeModules";

export default function Home() {
  return (
    <main className="bg-background dark:bg-background pt-24">
      <Navbar />
      <HomeModules />
    </main>
  );
}
