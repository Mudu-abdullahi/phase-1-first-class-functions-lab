// Code your solution in this file!
// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Doubles fare
const fareDoubler = createFareMultiplier(2);

// 6. Triples fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers — applies a function to a drivers array
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
