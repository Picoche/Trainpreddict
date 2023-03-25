async function orderData() {
  const userData = [];
  const request = await fetch("./Traitement_donnees/entrainements-13-12-2022.json");
  const dataJSON = await request.json();
  dataJSON.forEach((data) => {
    userData.push(data);
  });
  return userData;
}

async function dataToMonth(month) {
  const fetchedData = await orderData();
  const toYear2022 = fetchedData.filter(
    (data) => new Date(data.date).getYear() === 122
  );
  const monthlyUserData = await arrayToSpecificMonth(toYear2022, month);
  monthlyUserData.sort(
    (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
  );
  return monthlyUserData;
}

async function dataToWeek(month, week) {
  const fetchedData = await orderData();
  const toYear2022 = fetchedData.filter(
    (data) => new Date(data.date).getYear() === 122
  );
  const monthlyUserData = await arrayToSpecificMonth(toYear2022, month);
  monthlyUserData.sort(
    (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
  );
  const weeklyUserData = monthlyUserData.filter(
    (data) => Math.floor(new Date(data.date).getDate() / 7) == week
  );
  console.log(weeklyUserData);
  return weeklyUserData;
}
