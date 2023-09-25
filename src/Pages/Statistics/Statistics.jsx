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
    <div>
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
            lineWidth: 20,
            value: `${items.length ? items.length : 12}`,
            color: "#00C49F",
          },
          {
            title: "Total Donation",
            lineWidth: 80,
            value: `${remain ? remain : 1}`,
            color: "#FF444A",
          },
        ]}
      />
      ;
    </div>
  );
};

export default Statistics;
