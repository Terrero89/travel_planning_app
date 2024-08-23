
"use client"

import { useTripsStore } from '@/app/stores/useStore';
import Trips from '../../types/trips';
import DestinationItem from './DestinationItem';




const Header: React.FC<{}> = ({}) => {
    const destination = useTripsStore((state: { trip: Trips[]; }) => state.trip);

  return (
    <div className="">
        <DestinationItem destinationList={destination}/>
    
    </div>

  );
}

export default Header;



