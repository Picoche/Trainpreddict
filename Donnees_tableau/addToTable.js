const dataImport = document.querySelector(".dataImport");

const favListToJson = localStorage.getItem("favList");

const savedTrainings = new Map(Object.entries(JSON.parse(favListToJson)));

savedTrainings.forEach((data) => {
  dataImport.innerHTML += "<tr>";
  dataImport.innerHTML += `<td>${
    everyDay[new Date(data.date).getDay()]
  } ${new Date(data.date).getDate()} ${
    everyMonth[new Date(data.date).getMonth()]
  }</td>
  <td>${data.duree}</td>
  <td>${data.calories}</td>
  <td>${data.distance}</td>
  <td>${(
    data.distance /
    (data.duree.slice(3, 5) / 60 + parseInt(data.duree.slice(0, 2)))
  ).toFixed(2)}</td>
        `;
  dataImport.innerHTML += "</tr>";
});
