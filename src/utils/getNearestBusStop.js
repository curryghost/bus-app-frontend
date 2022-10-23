import getDistance from "./getDistance";

const getNearestBusStop = (geoLatitude, geoLongitude, busStop, unit) => {
    let nearestBusStop = [];
    busStop.forEach((value) => {
        if (nearestBusStop.length < 30) {
            nearestBusStop.push({ ...value, distance: getDistance(geoLatitude, geoLongitude, value.Latitude, value.Longitude, unit) })
            nearestBusStop.sort((a, b) => a.distance - b.distance)
        }
        else {
            nearestBusStop.forEach((nearStop, index) => {
                const dist = getDistance(geoLatitude, geoLongitude, value.Latitude, value.Longitude, unit)
                if (nearStop.distance > dist) {
                    nearestBusStop.splice(index, 1, { ...value, distance: dist })
                    nearestBusStop.pop()
                }
            })
        }
    })
    return nearestBusStop;
}

export default getNearestBusStop;