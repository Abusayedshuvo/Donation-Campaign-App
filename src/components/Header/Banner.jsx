const Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[50vh]">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <div className="join lg:w-4/5">
            <input
              className="input input-bordered join-item w-full rounded-l-lg"
              placeholder="Search here...."
            />
            <button className="btn join-item rounded-r-lg bg-primary text-white px-8">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
