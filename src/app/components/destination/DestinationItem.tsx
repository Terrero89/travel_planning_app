
"use client"

import Trips from '../../types/trips';
import { useTripsStore } from '../../storess/useTripsStore'

interface Props {
    destinationList: string;
}

const Header: React.FC<Props> = ({ destinationList }: Trips) => {
    // getting the destination by id from store
    const trip = useTripsStore((state: { trip: Trips[]; }) => state.trip);
    return (
        <div className="border-2 border-white border-opacity-25 content-center my-2 p-2">
            <div>TRIPS: {trip.map((trip: Trips) => trip.destination)}</div>
        </div>


    );
}

export default Header;

