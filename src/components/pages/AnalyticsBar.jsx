import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { getAnalytics } from "../../services/Analytics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const AnalyticsBar = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const getData = () => {
    getAnalytics((res) => setAnalyticsData(res));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("analytics data is", analyticsData);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = analyticsData?.months
//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];
// console.log("checking labels",labels)
  const data = {
    labels,
    datasets: [
      {
        label: analyticsData.companyOne,
        // data: labels?.map(()=>faker.datatype.number({ min: 0, max: 1000 })),
        data: analyticsData?.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000})),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: analyticsData.companyTwo,
        // data: labels?.map(()=>faker.datatype.number({ min: 0, max: 1000 })),
        data: analyticsData?.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000})),

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default AnalyticsBar;
