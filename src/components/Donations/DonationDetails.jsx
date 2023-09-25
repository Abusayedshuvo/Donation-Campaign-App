import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id === id);
  const { picture, title, description, price, text_color } = donation;

  const handleDonate = () => {
    const addDonations = [];
    const donateItems = JSON.parse(localStorage.getItem("items"));
    if (!donateItems) {
      addDonations.push(donation);
      localStorage.setItem("items", JSON.stringify(addDonations));
      Swal.fire("Good job!", "You have successfully Donate", "success");
    } else {
      const isExit = donateItems.find((donateItem) => donateItem.id === id);
      console.log(isExit);
      if (!isExit) {
        addDonations.push(...donateItems, donation);
        localStorage.setItem("items", JSON.stringify(addDonations));
        Swal.fire("Good job!", "You have successfully Donate", "success");
      } else {
        Swal.fire("Oops!", "You have already added this", "error");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-20">
        <div className="relative">
          <img
            className="w-full rounded-b-md"
            src={picture}
            alt={`Picture of: ${title}`}
          />
          <div className="bg-black/75 py-10 pl-10 absolute bottom-0 w-full rounded-b-md">
            <button
              onClick={handleDonate}
              style={{ backgroundColor: `${text_color}` }}
              className="text-white px-6 py-3 rounded-md"
            >
              Donate ${price}
            </button>
          </div>
        </div>

        <h2 className="text-4xl font-bold my-5"> {title} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default DonationDetails;
