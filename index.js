const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

//array of the above functions
const selectDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const quadrapleFare = function createFareMultiplier(integer){
    return function(fare){
        return fare*integer;
    }
}

//fare doubler
const doubledFare = createFareMultiplier(2);

//fare tripler
const tripleFare = createFareMultiplier(3);

//return select drivers from either of the two functions
function selectDrivers(drivers, func){
    return func (drivers);
}

