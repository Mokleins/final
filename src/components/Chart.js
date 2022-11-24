// ./components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart = ({ items, genre }) => {
  const first = items?.filter(function (item) {
    return item.track.popularity <= 20;
  }).length;

  const second = items?.filter(function (item) {
    return item.track.popularity > 20 && item.track.popularity <= 40;
  }).length;

  const third = items?.filter(function (item) {
    return item.track.popularity > 40 && item.track.popularity <= 60;
  }).length;

  const fourth = items?.filter(function (item) {
    return item.track.popularity > 60 && item.track.popularity <= 80;
  }).length;

  const fifth = items?.filter(function (item) {
    return item.track.popularity > 80 && item.track.popularity <= 100;
  }).length;

  const labels = ["1 - 20", "21 - 40", "41 - 60", "61 - 80", "81 - 100"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount of songs",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#684f6e",
          "#684f06",
          "#700a06",
          "#FE452A",
        ],
        borderColor: "rgb(6, 10, 6)",
        data: [first, second, third, fourth, fifth],
      },
    ],
  };
  return (
    <div  style={{ width: 450, textAlign: "center" }}>
      <h2>{genre} Popularity</h2>
      <Pie data={data} width={50} height={50} />
      <h4>
        The chart shows the amounts of {genre} songs of different ranges of
        popularity
      </h4>
    </div>
  );
};
export default PieChart;
