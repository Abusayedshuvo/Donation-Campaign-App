import Donations from "../../components/Donations/Donations";
import Banner from "./../../components/Header/Banner";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
  };

  return (
    <>
      <Banner handleSearch={handleSearch}></Banner>
      <Donations search={search}></Donations>
    </>
  );
};

export default Home;
