import getDistance from "./getDistance";

const getNearestBusStop = (geoLatitude, geoLongitude, busStop, unit) => {
    let nearestBusStop = [];
    busStop.forEach((value) => {
        const dist = getDistance(geoLatitude, geoLongitude, value.Latitude, value.Longitude, unit)
        if (dist < 2)
            nearestBusStop.push({ ...value, dist })
    })
    nearestBusStop.sort((a, b) => a.dist - b.dist)
    return nearestBusStop;
}

export default getNearestBusStop;