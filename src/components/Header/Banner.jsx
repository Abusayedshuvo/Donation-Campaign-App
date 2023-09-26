import PropTypes from "prop-types";

const Banner = ({ handleSearch }) => {
  return (
    <>
      <div
        className="hero block relative"
        style={{
          backgroundImage: "url(/images/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-95 bg-white absolute"></div>
        <div className="relative">
          <div className="flex justify-center items-center h-[50vh] banner">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
                I Grow By Helping People In Need
              </h1>
              <div>
                <div className="join lg:w-4/5">
                  <input
                    id="search-field"
                    name="search"
                    className="input input-bordered join-item w-full rounded-l-lg"
                    placeholder="Search here...."
                  />
                  <button
                    id="searchBtn"
                    onClick={handleSearch}
                    className="btn join-item rounded-r-lg bg-primary text-white px-8"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func,
};

export default Banner;
