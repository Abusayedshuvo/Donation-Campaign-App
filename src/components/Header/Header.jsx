import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="hero block relative"
          style={{
            backgroundImage: "url(images/banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-95 bg-white absolute"></div>
          <div className="relative">
            <Navbar></Navbar>
            <Banner></Banner>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
