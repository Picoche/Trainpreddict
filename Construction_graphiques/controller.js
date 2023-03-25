needsUpdate = 0;
monthSelector.addEventListener("change", async (e) => {
  if (needsUpdate != 0) {
    updateDataMonthly(myChart, e.target.value);
    interactiveMonthlyChart(myChart, e.target.value);
  } else {
    needsUpdate++;
    await interactiveMonthlyChart(
      await buildMonthlyChart(e.target.value),
      e.target.value
    );
  }
});
weekSelector.addEventListener("change", async (e) => {
  if (needsUpdate != 0) {
    updateDataWeekly(myChart, monthSelector.value, e.target.value);
    interactiveWeeklyChart(myChart, monthSelector.value, e.target.value);
  } else {
    needsUpdate++;
    await interactiveWeeklyChart(
      await buildWeeklyChart(e.target.value),
      monthSelector.value,
      e.target.value
    );
  }
});
