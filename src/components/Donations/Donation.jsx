import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    donation;
  return (
    <>
      <Link to={`/donation/${id}`}>
        <div>
          <img className="w-full" src={picture} alt={`Picture of: ${title}`} />
          <div
            style={{ backgroundColor: `${card_bg}` }}
            className={`bg-[${card_bg}]  p-6 rounded-b-md`}
          >
            <p>
              <span
                style={{
                  backgroundColor: `${category_bg}`,
                  color: `${text_color}`,
                }}
                className={`bg-[${category_bg}]  text-[${text_color}] px-4 py-2 rounded-md font-medium`}
              >
                {category}
              </span>
            </p>
            <p className={`text-xl font-semibold mt-4 text-[${text_color}]`}>
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

Donation.propTypes = {
  donation: PropTypes.object,
};

export default Donation;
