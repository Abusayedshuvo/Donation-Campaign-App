import Donations from "../../components/Donations/Donations";
import Banner from "./../../components/Header/Banner";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const searchInput = document.getElementById("search-field");
    setSearch(searchInput.value);
  };
  return (
    <>
      <Banner handleSearch={handleSearch}></Banner>
      <Donations search={search}></Donations>
    </>
  );
};

export default Home;
