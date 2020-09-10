// assignment:01
// feet to mile convert

function feetToMile(feet) {
    var oneFeetToMile = 0.000189394;
    var result = feet < 0 ? "Distance can't be negative" :
    Number((feet * oneFeetToMile).toFixed(5));
    return result;
}

//assignment: 02
//wood calculator
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    var woodForOneChair = 1;
    var woodForOneTable = 3;
    var woodForOneBed = 5;
    if (chairQuantity < 0 || tableQuantity < 0 || bedQuantity < 0) {
        return "Furniture's Quantity can't be negative";
    }
    var totalWood = woodForOneChair * chairQuantity + woodForOneTable * tableQuantity + woodForOneBed * bedQuantity;
    return totalWood;
}

//assignment: 03
//brick calculator
function brickCalculator(floors) {
    var bricksPerFeet = 1000;
    var totalBricks = 0;
    if (floors < 0) {
        return "Number of floors can't be negative";
    }
    if (floors <= 10) {
        totalBricks = (floors * 15) * bricksPerFeet;
    } 
    else if (floors <= 20) {
        var firstTenFloors = (10 * 15) * bricksPerFeet;
        var lastRemaining = (floors - 10) * 12 * bricksPerFeet;
        totalBricks = firstTenFloors + lastRemaining;
    } 
    else {
        var firstTenFloors = (10 * 15) * bricksPerFeet;
        var nextTenFloors = (10 * 12) * bricksPerFeet;
        var remainingFloors = (floors - 20) * 10 * bricksPerFeet;
        totalBricks = firstTenFloors + nextTenFloors + remainingFloors;
    }
    return totalBricks;
}

//assignment: 04
//tiny friend
function tinyFriend(friendliest) {
    var shortLength = Infinity;
    var shortest = "";

    if (friendliest.length > 0) {
        for (var i = 0; i < friendliest.length; i++) {
            if ( friendliest[i].length < shortLength) {
                shortest = friendliest[i];
                shortLength = friendliest[i].length;
            }
        }
    }
    return shortest;
}
