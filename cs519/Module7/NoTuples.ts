type HouseDataType = [string, string, string, number];
const fetchHouseData = () => ['1214 S. Wall St.', 'Seattle', 'WA', 90000];
const houseData = fetchHouseData();
console.log(houseData);

houseData[0] = 95000;
console.log(houseData);