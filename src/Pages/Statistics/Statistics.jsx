import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [items, setItems] = useState([]);
  let remain = Math.abs(items.length - 12);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className="container mx-auto flex-col flex justify-center items-center h-[75vh]">
      <PieChart
        style={{ height: "300px" }}
        totalValue={12}
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        labelStyle={{
          fontSize: "16px",
          fill: "#fff",
        }}
        data={[
          {
            title: "Your Donation",
            value: `${items.length ? items.length : 12}`,
            color: "#00C49F",
          },
          {
            title: "Total Donation",
            value: `${remain ? remain : 1}`,
            color: "#FF444A",
          },
        ]}
      />
      ;
      <div className="md:flex gap-40 justify-between mt-16">
        <p>
          <span>Your Donation</span>
          <span className="bg-[#00C49F] w-20 h-2 absolute mt-2 ml-4"></span>
        </p>
        <p>
          <span>Total Donation</span>
          <span className="bg-[#FF444A] w-20 h-2 absolute mt-2 ml-4"></span>
        </p>
      </div>
    </div>
  );
};

export default Statistics;
