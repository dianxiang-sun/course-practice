var fetchHouseData = function () { return ['1214 S. Wall St.', 'Seattle', 'WA', 90000]; };
var houseData = fetchHouseData();
console.log(houseData);
houseData[0] = 95000;
console.log(houseData);
