import {calculateAmountStops} from './calculateAmountStops'

// Function that receives 3 parameters, responsible for calculating the resupplie total.
export function calculateResupplie (distanceResupplie, totalDistance, mglt){
let totalResupplie;

const day = 24
const week = 24 * 7
const month = 24 * 30
const year = 24 * 365

/*
Switch case responsible filter whether the value of consumables 
should be calculated in day, week, month or year.
It receives as parameter "distanceResupplie" 
which corresponds to the value coming from the 
consumables API (Ex:  "3 weeks") which is treated by the "breakDistance" 
function that splits the value creating a new array containing 2 elements (Ex: ['3', 'weeks'])

After filtering the value of index [1] (day, week, month or year.) 
 */

switch(distanceResupplie[1]) {
    /*
    The index [0] corresponds to the quantity, which is multiplied 
    with the corresponding value in hours  (day = 24, week = 24 * 7, month = 24 * 30, year = 24 * 365)
    The return the value of the "totalResupplie" that corresponds  the consumable autonomy period ((returning the ship's total
     consumable autonomy hours value until the ship has to stop to reapplish the supplements).).
    */
    case "day":
    case "days":
      totalResupplie = distanceResupplie[0]* day;
            
    break;

    case "week":
    case "weeks":
        totalResupplie = distanceResupplie[0]*week;
    break;

    case "month":
    case "months":
        totalResupplie = distanceResupplie[0]*month;
    break;

    case "year":
    case "years":
        totalResupplie = distanceResupplie[0]*year;
    break;
  
    default:
        totalResupplie = "Did not receive a distance";
    }
    
    //  The switch case calls the function calculateAmountStops responsible to calculate Amount Stops
    return calculateAmountStops(totalDistance, mglt, totalResupplie)
}


export function breakDistance(distanceResupplie){
    return distanceResupplie.split(" ")
}



