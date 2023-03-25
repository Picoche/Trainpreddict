async function buildWeeklyChart(month, week) {
  const weeklyUserData = await dataToWeek(month, week);

  const labels = createLabels(weeklyUserData);

  const myChart = setDataOnChart(labels, weeklyUserData);

  return myChart;
}

async function interactiveWeeklyChart(chart, month, week) {
  const weeklyUserData = await dataToWeek(month, week);
  ctx.addEventListener("click", (e) => {
    const points = chart.getElementsAtEventForMode(
      e,
      "nearest",
      { intersect: true },
      true
    );
    const star = document.querySelector("#etoile");
    star.addEventListener("click", () => {
      favList.set(userData, eventDate);
    });
    console.log(favList);

    if (points.length) {
      const firstPoint = points[0];
      const dateAtPoint = chart.data.labels[firstPoint.index];
      const userDataAtPoint =
        chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

      weeklyUserData.forEach((data) => {
        if (data.distance === userDataAtPoint) {
          const temps =
            data.duree.slice(3, 5) / 60 + parseInt(data.duree.slice(0, 2));

          displayedDataContainer.innerHTML = `<h2>${dateAtPoint} :</h2>
                <div>
                <ul class="valeurpoint">
                <li>${data.distance}<span>km</span></li>
                <li>${data.calories}<span>Kcal</span></li>
                <li>${data.duree.slice(0, 8)}</li>
                <li>${(data.distance / temps).toFixed(2)}<span>km/h</span></li>
                </ul>
                </div>
                <div class="desc">
                <h3>Retours sur l'entraînement <span id="etoile">&#9734</span></h3>
                <p>${data.description}</p>
                </div>`;
          const star = document.querySelector("#etoile");
          star.addEventListener("click", () => {
            favList.set(dateAtPoint, data);
            const favListToJson = JSON.stringify(Object.fromEntries(favList));
            localStorage.setItem("favList", favListToJson);
          });
        }
      });
    }
  });
  return chart;
}
