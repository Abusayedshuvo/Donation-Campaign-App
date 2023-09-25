import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Donate = () => {
  const [items, setItems] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div className="container mx-auto my-20">
      {noData ? (
        <p> {noData} </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item) => (
            <DonateCard key={item.id} item={item}></DonateCard>
          ))}
        </div>
      )}
    </div>
  );
};

const DonateCard = ({ item }) => {
  const { picture, category, title, price, card_bg, category_bg, text_color } =
    item;
  console.log(item);
  return (
    <div className="flex rounded-md" style={{ backgroundColor: `${card_bg}` }}>
      <img className="rounded-b-md" src={picture} alt={title} />
      <div className="pl-5 py-5 w-full">
        <p>
          <span
            className="px-6 py-2 rounded-md"
            style={{
              backgroundColor: `${category_bg}`,
              color: `${text_color}`,
            }}
          >
            {category}
          </span>
        </p>
        <p className="text-2xl pt-4 font-bold"> {title} </p>

        <p style={{ color: `${text_color}` }} className="font-semibold">
          ${price}
        </p>

        <button
          style={{ backgroundColor: `${text_color}` }}
          className="px-6 py-3 rounded-md text-white mt-3"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

DonateCard.propTypes = {
  item: PropTypes.object,
};

export default Donate;
