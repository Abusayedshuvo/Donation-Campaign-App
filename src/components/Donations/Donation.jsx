const Donation = ({ donation }) => {
  console.log(donation);
  const { picture, title, category, card_bg, category_bg, text_color } =
    donation;
  return (
    <div>
      <img className="w-full" src={picture} alt={`Picture of: ${title}`} />
      <div className={`bg-[${card_bg}] p-6 rounded-b-md`}>
        <p>
          <span
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
  );
};

export default Donation;
