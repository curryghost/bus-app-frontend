import sd from '../../assets/sd.png';
import dd from '../../assets/dd.png';
import './RowDetails.scss'

export const RowDetails = ({ value, index }) => {
    const arrivingBus = [value.NextBus, value.NextBus2, value.NextBus3]

    const getMinutes = (expected) => {
        const time = new Date(expected).getTime();
        const diff = time - Date.now();
        return Math.round(diff / 1000 / 60);
    }

    const checkLoad = (load) => {
        switch (load) {
            case 'SEA':
                return 'green';
            case 'SDA':
                return 'orange';
            case 'LSD':
                return 'red';
            default:
                return 'white';
        }
    }

    const busType = (type) => {
        switch (type) {
            case 'SD':
                return sd
            case 'DD':
                return dd
            default:
                return ''
        }
    }

    const arrivingDetails = arrivingBus.map((bus, i) =>
        <div className="bus" key={i}>
            <span style={bus.Load ? { backgroundColor: checkLoad(bus.Load) } : {}}></span>
            <img src={busType(bus.Type)} />
            <p>{!isNaN(getMinutes(bus.EstimatedArrival)) ? `${getMinutes(bus.EstimatedArrival)} mins` : ''}</p>
        </div>
    )

    return (
        <div className="row">
            <p className="busNo">{value.ServiceNo}</p>
            {arrivingDetails}
        </div>
    )
}