const everyMonth = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const everyDay = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const arrayToSpecificMonth = async (array, month) => {
  const newArray = array.filter(
    (data) => everyMonth[new Date(data.date).getMonth()] === month
  );
  return newArray;
};

const ctx = document.querySelector("#myChart");
const displayedDataContainer = document.querySelector(".data-container");
const monthSelector = document.querySelector("#mois");
const weekSelector = document.querySelector("#semaine");

const createLabels = (dataArray) => {
  const chartLabels = [];
  dataArray.forEach((data) => {
    chartLabels.push(
      everyDay[new Date(data.date).getDay()] +
        " " +
        new Date(data.date).getDate() +
        " " +
        everyMonth[new Date(data.date).getMonth()]
    );
  });
  return chartLabels;
};

let myChart;
const setDataOnChart = (labels, dataArray) => {
  const ctx = document.querySelector("#myChart");
  const dataToDisplay = {
    labels: labels,
    datasets: [
      {
        data: dataArray.map((data) => data.distance),
        backgroundColor: [
          "#EFF8E2",
          "#CECFC7",
          "#BEBCBF",
          "#ADA8B6",
          "#573280",
          "#3D1A57",
          "#23022E",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const chart = new Chart(ctx, {
    type: "line",
    data: dataToDisplay,
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: "Distance en km",
          },
        },
      },
    },
  });
  myChart = chart;
  return chart;
};

const favList = new Map();
