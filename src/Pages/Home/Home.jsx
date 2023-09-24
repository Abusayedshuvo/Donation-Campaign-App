import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Donations from "../../components/Donations/Donations";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);
  return (
    <>
      <Header></Header>
      <Donations></Donations>
    </>
  );
};

export default Home;
