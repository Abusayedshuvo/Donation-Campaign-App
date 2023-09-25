import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id === id);
  const { picture, title, description, price, text_color } = donation;

  const handleDonate = () => {
    Swal.fire("Good job!", "You have successfully Donate", "success");
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
