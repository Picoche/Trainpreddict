const updateDataMonthly = async (chart, month) => {
  const userData = await dataToMonth(month);
  const labels = createLabels(await dataToMonth(month));
  chart.data.labels = labels;
  chart.data.datasets[0].data = userData.map((data) => data.distance);
  chart.update();
};

const updateDataWeekly = async (chart, month, week) => {
  const userData = await dataToWeek(month, week);
  const labels = createLabels(await dataToWeek(month, week));
  chart.data.labels = labels;
  chart.data.datasets[0].data = userData.map((data) => data.distance);
  chart.update();
};
