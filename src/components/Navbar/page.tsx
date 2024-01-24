import { TopBanner, SecondNav } from "@/components";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div>
      {/* Top banner */}
      <TopBanner />

      {/* Navbar */}
      <Nav />

      {/* Second Navbar */}
      <SecondNav />
    </div>
  );
};

export default Navbar;
