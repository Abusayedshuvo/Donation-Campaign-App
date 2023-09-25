const Banner = ({ handleSearch }) => {
  // const [search, setSearch] = useState("");
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   setSearch(event.target.search.value);
  // };

  // console.log(search);

  return (
    <>
      <div className="flex justify-center items-center h-[50vh]">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <div>
            <form className="join lg:w-4/5" onSubmit={handleSearch}>
              <input
                name="search"
                className="input input-bordered join-item w-full rounded-l-lg"
                placeholder="Search here...."
              />
              <input
                type="submit"
                value={"Search"}
                className="btn join-item rounded-r-lg bg-primary text-white px-8"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
