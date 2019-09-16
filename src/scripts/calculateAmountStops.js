export function calculateAmountStops(totalDistance, mglt, totalResupplie ){
    let totalAmountStops = ((totalDistance/mglt)/totalResupplie).toFixed()
    return totalAmountStops;
}
