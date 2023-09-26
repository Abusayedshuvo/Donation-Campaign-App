import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import Donation from "./Donation";
import Swal from "sweetalert2";

const Donations = ({ search }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(function (donations) {
        if (search) {
          donations = donations.filter(
            (category) =>
              search.toLowerCase() === category.category.toLowerCase()
          );
          if (!donations.length) {
            Swal.fire("Oops!", "Category not found", "error");
          }
        }
        setDonations(donations);
      });
  }, [search]);

  return (
    <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-0">
      {donations.map((donation, idx) => (
        <Donation key={idx} donation={donation}></Donation>
      ))}
    </div>
  );
};

Donations.propTypes = {
  search: PropTypes.string,
};

export default Donations;
