import TopBanner from "./TopBanner";
import Nav from "./Nav";
import SecondNav from "./SecondNav";

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
