
"use client"

// import { useTripsStore } from '@/app/stores/useStore';
import Trips from '../../types/trips';

interface DestionationProps{
    destinationList: Trips[]
}


const DestinationItem: React.FC<DestionationProps> = ({destinationList}) => {
 
    return (
        <div className=" content-center my-2 p-2 ">
            <div className=" content-center">{destinationList.map((trip: Trips) => <h3>{trip.destination}</h3>)} </div>
        </div>


    );
}

export default DestinationItem;

