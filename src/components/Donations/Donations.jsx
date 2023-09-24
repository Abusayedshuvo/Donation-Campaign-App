import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("data3.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {donations.map((donation, idx) => (
        <Donation key={idx} donation={donation}></Donation>
      ))}
    </div>
  );
};

export default Donations;
